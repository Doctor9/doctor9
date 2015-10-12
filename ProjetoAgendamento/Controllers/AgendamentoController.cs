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
        public ActionResult Index()
        {
            return View();
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

        //Consultar Agenda, soma de idEspec + idMedic
        //ViewBag.Agenda = idEspec + idMedic;

        if (dataAgendamento != null)
        {
                
        var ctx2 = new ApplicationDbContext();
        var cons = new Consulta() { idPaciente = 1, idEspecialidade = idEspec, idMedico = idMedic, dataAgendamento = "datahoje", dataConsulta = dataAgendamento, horarioConsulta = horaAgendamento};
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