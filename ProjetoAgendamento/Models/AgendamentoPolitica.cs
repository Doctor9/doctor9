using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class AgendamentoPolitica
    {
        [Key]
        public int idPolitica { get; set; }
        public int idMedico { get; set; }
        public int idEspecialidade { get; set; }
        public string descricao { get; set; }
    }

}