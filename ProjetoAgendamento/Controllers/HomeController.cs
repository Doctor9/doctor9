using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjetoAgendamento.Models;

namespace ProjetoAgendamento.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //var ctx = new ApplicationDbContext();
            //var usu = new Usuario() { Login = "admin", Senha = "123" };
            //
            //ctx.Usuarios.Add(usu);
            //ctx.SaveChanges();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}