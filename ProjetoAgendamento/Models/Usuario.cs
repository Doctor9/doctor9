﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Usuario
    {
        [Key]
        public int IdPaciente { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Apelido { get; set; }
        public TipoUsuario Tipo { get; set; }
        public int? IdMedico { get; set; }
        public Medico Medico { get; set; }

        public enum TipoUsuario
        {
            Paciente,
            Medico,
            Secretaria
        }
    }
}
