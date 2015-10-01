using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoAgendamento.Models
{
    public class Usuario
    {
        public int IdPaciente { get; set; }
        public int Login { get; set; }
        public string Senha { get; set; }
        public int CodVinculo { get; set; }
    }
}