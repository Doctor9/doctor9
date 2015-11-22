namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CorrigirUsuarios : DbMigration
    {
        public override void Up()
        {
            Sql("UPDATE Usuario SET Tipo = 1 WHERE IdMedico IS NOT NULL");
        }
        
        public override void Down()
        {
        }
    }
}
