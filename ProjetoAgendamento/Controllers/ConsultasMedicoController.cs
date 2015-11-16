using ProjetoAgendamento.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace ProjetoAgendamento.Controllers
{
    [Authorize(Roles="Medico")]
    public class ConsultasMedicoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Consultas()
        {
            var ctx = new ApplicationDbContext();
            var claims = HttpContext.User.Identity as ClaimsIdentity;
            var idMedico = int.Parse(claims.Claims.First(c => c.Type == "IdMedico").Value);
            
            var q = from c in ctx.Consultas
                    where c.idMedico == idMedico
                    select c;
            
            var agenda = q.ToList().Select(c =>
            {
                var dataConsulta = DateTime.Parse(c.dataConsulta + " " + c.horarioConsulta, , new CultureInfo("pt-BR"));
                var paciente = ctx.Usuarios.First(u => u.IdPaciente == c.idPaciente);

                return new
                {
                    id = c.IdConsulta,
                    title = paciente.Nome,
                    start = dataConsulta.ToString("yyyy-MM-dd HH:mm:ss"),
                    end = dataConsulta.AddMinutes(30).ToString("yyyy-MM-dd HH:mm:ss"),
                    color = "LimeGreen",
                    allDay = false,
                    marcacao = c.dataAgendamento,
                    observacoes = c.observacoes
                };
            });

            return Json(agenda, JsonRequestBehavior.AllowGet);
        }
    }
}
