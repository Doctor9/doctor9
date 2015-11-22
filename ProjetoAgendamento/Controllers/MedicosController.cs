using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjetoAgendamento.Models;

namespace ProjetoAgendamento.Controllers
{
    [Authorize(Roles="Secretaria")]
    public class MedicosController : Controller
    {
        public ActionResult Index(string msg)
        {
            var ctx = new ApplicationDbContext();
            var lista = ctx.Medicos
                .Include("Especialidade")
                .OrderBy(m => m.Nome);

            ViewBag.Msg = msg;

            return View(lista);
        }

        public ActionResult Incluir()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Incluir(Medico medico)
        {
            var ctx = new ApplicationDbContext();

            if (ctx.Medicos.FirstOrDefault(m => m.CRM == medico.CRM) != null)
            {
                ModelState.AddModelError("CRM", "Já existe um médico cadastrado com este CRM");
            }

            if (medico.Disponibilidade.HasValue && medico.Disponibilidade.Value < DateTime.Now.Date)
            {
                ModelState.AddModelError("Disponibilidade", "Disponibilidade deve ser superior a data atual");
            }

            if (!ModelState.IsValid)
            {
                return View();
            }

            if (medico.Disponibilidade.HasValue)
            {
                medico.Ativo = false;
            }
            else
            {
                medico.Ativo = true;
            }

            ctx.Medicos.Add(medico);
            ctx.SaveChanges();

            return RedirectToAction("Index", new { msg = "Médico cadastrado com sucesso" });
        }
    }
}
