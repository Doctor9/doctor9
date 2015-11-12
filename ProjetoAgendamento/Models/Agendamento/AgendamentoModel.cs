using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoAgendamento.Models.Agendamento
{
    public class AgendamentoModel
    {
        public ConsultaItem[] Consultas { get; set; }
    }

    public class Observacoes
    {
        public int Id { get; set; }
        public string Obs { get; set; }
    }

}