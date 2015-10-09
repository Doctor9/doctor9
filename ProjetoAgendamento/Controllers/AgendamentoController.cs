using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoAgendamento.Controllers
{
    [Authorize]
    public class AgendamentoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

    }
}