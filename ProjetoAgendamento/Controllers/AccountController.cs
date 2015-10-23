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
            var aaa = Request.Form["login"];
            var bbb = Request.Form["senha"];
            var saudacao = "";

            var usu = (from u in ctx.Usuarios
                       where u.Login == aaa && u.Senha == bbb
                       select u).FirstOrDefault();
            
            if (usu != null)
            {
                if (usu.Apelido == null)
                {
                    saudacao = usu.Nome;
                }
                else {
                    saudacao = usu.Apelido;
                }
                Session["UsuarioLogado"] = usu.IdPaciente;
                FormsAuthentication.SetAuthCookie(saudacao, false);
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