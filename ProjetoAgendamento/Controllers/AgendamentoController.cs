using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjetoAgendamento.Models;
using System.Web.Security;

namespace ProjetoAgendamento.Controllers
{
    [Authorize]
    public class AgendamentoController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        public ActionResult Index()
        {
            ViewBag.idEspecialidade = new SelectList(db.Especialidades, "idEspecialidade", "NomeEspecialidade");
            ViewBag.idMedico = new SelectList(db.Medicos, "idMedico", "ConcatenarCRM");
            return View();
        }

        public JsonResult ListaMedico(int Id)
        {
            var state = from s in db.Medicos
                        where s.idEspecialidade == Id
                        select s;
            return Json(new SelectList(state.ToArray(), "idMedico", "ConcatenarCRM"), JsonRequestBehavior.AllowGet);
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

            var ctx = new ApplicationDbContext();
            var idEspec = (from u in ctx.Especialidades
                       where u.NomeEspecialidade == descEspecialidade
                       select u.IdEspecialidade).FirstOrDefault();

            var idMedic = (from u in ctx.Medicos
                       where u.Nome == descMedico
                       select u.IdMedico).FirstOrDefault();

            if (dataAgendamento != null)
            {
                
            var ctx2 = new ApplicationDbContext();
            var cons = new Consulta() { idPaciente = 1, idEspecialidade = idEspec, idMedico = idMedic, dataAgendamento = DateTime.Now.ToString("dd/MM/yyyy"), dataConsulta = dataAgendamento, horarioConsulta = horaAgendamento};
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
        //public ActionResult Listar()
        //{
        //    string datainicio = Request["dtInicio"];
        //    string horainicio = Request["hrInicio"];
        //    string tela = Request["tela"];
        //
        //
        //    List<Consulta> agenda = Consulta.Listar(tela, datainicio, horainicio);
        //
        //    return Json(agenda, JsonRequestBehavior.AllowGet);
        //}


    }
}