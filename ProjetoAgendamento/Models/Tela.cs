using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Tela
    {
        [Key]
        public int idTela { get; set; }
        public int codTela { get; set; }
        public string DataConsulta { get; set; }
        public string HorarioConsulta { get; set; }
    }
}