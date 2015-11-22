namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManterMedicosAtivos : DbMigration
    {
        public override void Up()
        {
            Sql("UPDATE Medico SET Ativo = 1");
        }
        
        public override void Down()
        {
        }
    }
}
