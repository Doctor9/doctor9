using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Medico
    {
        [Key]
        public int IdMedico { get; set; }
        public string Nome { get; set; }
        public int idEspecialidade { get; set; }
    }
}