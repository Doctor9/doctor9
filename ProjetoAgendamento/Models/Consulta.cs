using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Consulta
    {
        [Key]
        public int IdConsulta { get; set; }
        public int idPaciente { get; set; }
        public int idEspecialidade { get; set; }
        public int idMedico { get; set; }
        public string dataAgendamento { get; set; }
        public string dataConsulta { get; set; }
        public string horarioConsulta { get; set; }
    }
    
}