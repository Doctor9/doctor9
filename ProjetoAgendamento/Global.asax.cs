using ProjetoAgendamento.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;

namespace ProjetoAgendamento
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            
            AntiForgeryConfig.UniqueClaimTypeIdentifier = ClaimTypes.Name;
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
            var authCookie = HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName];

            if (authCookie != null)
            {
                var ctx = new ApplicationDbContext();
                var ticket = FormsAuthentication.Decrypt(authCookie.Value);
                var formsIdentity = new FormsIdentity(ticket);
                var claimsIdentity = new ClaimsIdentity(formsIdentity);
                var usuario = ctx.Usuarios.First(u => u.Login == ticket.Name);
                
                if (usuario.Apelido != null)
                {
                    claimsIdentity.AddClaim(new Claim("saudacao", usuario.Apelido));
                }
                else
                {
                    claimsIdentity.AddClaim(new Claim("saudacao", usuario.Nome));
                }

                if (usuario.IdMedico != null)
                {
                    claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, "Medico"));
                    claimsIdentity.AddClaim(new Claim("IdMedico", usuario.IdMedico.ToString()));
                }
                else
                {
                    claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, "Paciente"));
                }
                
                HttpContext.Current.User = new ClaimsPrincipal(claimsIdentity);
            }
        }
    }
}
