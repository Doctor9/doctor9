using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjetoAgendamento.Models;
using System.Web.Security;
using Microsoft.AspNet.Identity;

namespace ProjetoAgendamento.Controllers
{
    [Authorize(Roles="Paciente")]
    public class AgendamentoController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public ActionResult Index()
        {
            ViewBag.idEspecialidade = new SelectList(db.Especialidades, "idEspecialidade", "NomeEspecialidade");
            ViewBag.idMedico = new SelectList(db.Medicos, "idMedico", "ConcatenarCRM");
            return View(new Models.Agendamento.AgendamentoModel()
            {
                Consultas = MinhasConsultas((int)Session["UsuarioLogado"])
            });
        }

        public JsonResult ListaMedico(int Id, string DataDisp)
        {
            if (DataDisp == "")
            {
                var state = from s in db.Medicos
                            where s.idEspecialidade == Id
                            select s;
                return Json(new SelectList(state.ToArray(), "idMedico", "ConcatenarCRM"), JsonRequestBehavior.AllowGet);
            }
            else
            {
                using (var context = new ApplicationDbContext())
                {
                    var state = context.Medicos.SqlQuery("select distinct aa.idmedico,aa.nome,aa.idEspecialidade,aa.CRM from ( select m.*,xx.agenda,yy.consulta from medico m inner join agenda a on a.idmedico = m.IdMedico inner join consulta c on c.idMedico = m.IdMedico left join (select idmedico,count(*) as agenda from agenda where dataconsulta = '" + DataDisp + "' group by idMedico ) xx on xx.idMedico = m.IdMedico left join (select idmedico,count(*) as consulta from Consulta where dataconsulta = '" + DataDisp + "' group by idMedico) yy on yy.idMedico = m.IdMedico where c.dataconsulta = '" + DataDisp + "' and a.horarioConsulta = c.horarioConsulta ) aa where aa.consulta < aa.agenda and aa.idEspecialidade = " + Id);
                    return Json(new SelectList(state.ToArray(), "idMedico", "ConcatenarCRM"), JsonRequestBehavior.AllowGet);
                }
                
            }
            
        }

        public JsonResult ListaPolitica(int Id)
        {
            var pol = from a in db.AgendamentoPolitica
                        where a.idEspecialidade == Id
                        select a;
        
            return Json(pol.ToList(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult RemoveConsulta(int Id)
        {
            using (var context = new ApplicationDbContext())
            {
                var cons = context.Consultas.FirstOrDefault(u => u.IdConsulta == Id);
                context.Consultas.Remove(cons);
                    context.SaveChanges();
       
                return RedirectToAction("", "Agendamento");
            }
        }

        public IList<Medico> Getespec(int IdEspecialidade)
        {
            return db.Medicos.Where(m => m.IdMedico == IdEspecialidade).ToList();
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult CarregaMedicoEspec(string NomeEspecialidade)
        {
            var stateList = this.Getespec(Convert.ToInt32(NomeEspecialidade));
            var stateData = stateList.Select(m => new SelectListItem()
            {
                Text = m.Nome,
                Value = m.idEspecialidade.ToString(),
            });
            return Json(stateData, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult AgendamentoConsulta(FormCollection f, string returnUrl)
        {

            var dataAgendamento = Request.Form["diaAgenda"];
            var horaAgendamento = Request.Form["hrAgenda"];
            var descEspecialidade = Request.Form["idEspecAgenda"];
            var descMedico = Request.Form["idMedicAgenda"];
            var CRM = string.Concat(descMedico.TakeWhile((c) => c != '-'));
            var usuario = (int)Session["UsuarioLogado"];
            
            var ctx = new ApplicationDbContext();
            var idEspec = (from u in ctx.Especialidades
                       where u.NomeEspecialidade == descEspecialidade
                       select u.IdEspecialidade).FirstOrDefault();

            var idMedic = (from u in ctx.Medicos
                       where u.CRM.ToString() == CRM
                           select u.IdMedico).FirstOrDefault();

            if (dataAgendamento != null)
            {
                
            var ctx2 = new ApplicationDbContext();
            var cons = new Consulta() { idPaciente = usuario, idEspecialidade = idEspec, idMedico = idMedic, dataAgendamento = DateTime.Now.ToString("dd/MM/yyyy"), dataConsulta = dataAgendamento, horarioConsulta = horaAgendamento};
                ctx2.Consultas.Add(cons);
                ctx2.SaveChanges();
            }
            else
            {
                ModelState.AddModelError("Senha", "Usuário ou senha inválido");
                return View();
            }
                return RedirectToAction("", "Agendamento");
         }



        /*Carregamento*/
        public ActionResult Listar(int medico)
        {
            var ctx = new ApplicationDbContext();
            var usuario = (int)Session["UsuarioLogado"];

            var q = from c in ctx.Consultas
                    where c.idMedico == medico
                    select c;

            var agenda = q.ToList().Select(c =>
            {
                var dataConsulta = DateTime.Parse(c.dataConsulta + " " + c.horarioConsulta);

                if (c.idPaciente == usuario)
                {
                    return new
                    {
                        id = c.IdConsulta,
                        title = "Consulta",
                        start = dataConsulta.ToString("yyyy-MM-dd HH:mm:ss"),
                        end = dataConsulta.AddMinutes(30).ToString("yyyy-MM-dd HH:mm:ss"),
                        color = "LimeGreen",
                        allDay = false
                    };
                }
                else
                {
                    return new
                    {
                        id = c.IdConsulta,
                        title = "Consulta",
                        start = dataConsulta.ToString("yyyy-MM-dd HH:mm:ss"),
                        end = dataConsulta.AddMinutes(30).ToString("yyyy-MM-dd HH:mm:ss"),
                        color = "DimGray",
                        allDay = false
                    };

                }
            }
                );

            return Json(agenda, JsonRequestBehavior.AllowGet);
        }
        
        public Models.Agendamento.ConsultaItem[] MinhasConsultas(int usuario)
        {
            ApplicationDbContext db = new ApplicationDbContext();

            var mcons = (from con in db.Consultas.Where(con => con.idPaciente == usuario)
                         from med in db.Medicos.Where(med => med.IdMedico == con.idMedico)

                         select new Models.Agendamento.ConsultaItem()
                         {
                             dataConsulta = con.dataConsulta,
                             horarioConsulta = con.horarioConsulta,
                             Nome = med.Nome,
                             idConsulta = con.IdConsulta
                         }).Distinct().OrderBy(con => con.dataConsulta).Take(5)
                         .ToArray();
            return mcons;
        }
        
    }
}