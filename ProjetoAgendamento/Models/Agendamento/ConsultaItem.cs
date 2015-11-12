using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoAgendamento.Models.Agendamento
{
    public class ConsultaItem
    {
        public string dataConsulta { get; set; }
        public string horarioConsulta { get; set; }
        public string nome { get; set; }
        public string observacoes { get; set; }
        public int idConsulta { get; set; }
    }

}