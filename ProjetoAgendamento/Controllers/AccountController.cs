using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using ProjetoAgendamento.Models;
using System.Web.Security;

namespace ProjetoAgendamento.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        public ActionResult Login(FormCollection f, string returnUrl)
        {
            var ctx = new ApplicationDbContext();
            var login = Request.Form["login"];
            var senha = Request.Form["senha"];
            
            var usu = (from u in ctx.Usuarios
                       where u.Login == login && u.Senha == senha
                       select u).FirstOrDefault();
            
            if (usu != null)
            {
                Session["UsuarioLogado"] = usu.IdPaciente;
                FormsAuthentication.SetAuthCookie(login, false);
                return RedirectToAction("Index", "");
            }
            else
            {
                ModelState.AddModelError("Senha", "Usuário ou senha inválido");
                return View();
            }
        }

        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
        
    }
}