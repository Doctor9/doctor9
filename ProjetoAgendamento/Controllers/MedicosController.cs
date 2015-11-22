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
        public ActionResult Index()
        {
            var ctx = new ApplicationDbContext();
            var lista = ctx.Medicos
                .Include("Especialidade")
                .OrderBy(m => m.Nome);

            return View(lista);
        }
    }
}
