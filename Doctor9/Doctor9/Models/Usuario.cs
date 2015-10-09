using System.ComponentModel.DataAnnotations;

namespace ProjetoAgendamento.Models
{
    public class Usuario
    {
        [Key]
        public int IdPaciente { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public int CodVinculo { get; set; }
        public string Nome { get; set; }
        public string Apelido { get; set; }
    }
}