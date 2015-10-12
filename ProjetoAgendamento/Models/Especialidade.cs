using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Especialidade
    {
        [Key]
        public int IdEspecialidade { get; set; }
        public string NomeEspecialidade { get; set; }
        public string Descricao { get; set; }
    }
}