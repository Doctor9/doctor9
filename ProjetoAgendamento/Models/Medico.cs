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

        [Display(Name = "CRM")]
        [Required(ErrorMessage = "O campo CRM é obrigatório.")]
        public int CRM { get; set; }

        [Display(Name = "Nome Completo")]
        [Required(ErrorMessage = "O campo Nome Completo é obrigatório.")]
        public string Nome { get; set; }

        [Display(Name = "Especialidade")]
        public int idEspecialidade { get; set; }
        public virtual Especialidade Especialidade { get; set; }

        [Display(Name = "Data de Nascimento")]
        public DateTime? DataNascimento { get; set; }

        [Display(Name = "Sexo")]
        public bool? SexoMasculino { get; set; }

        [Display(Name = "Disponibilidade")]
        public DateTime? Disponibilidade { get; set; }

        [Display(Name = "Telefone de Contato")]
        public string Telefone { get; set; }

        [Display(Name = "Email")]
        [EmailAddress(ErrorMessage = "Preencha um email válido.")]
        public string Email { get; set; }
        
        [Display(Name = "Observações")]
        public string Observacoes { get; set; }

        public bool Ativo { get; set; }

        public string ConcatenarCRM
        {
            get
            {
                return string.Format("{0} - {1}", CRM, Nome);
            }
        }
    }
}
