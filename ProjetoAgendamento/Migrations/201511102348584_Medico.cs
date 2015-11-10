namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Medico : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Medico", "Medico_IdMedico", "dbo.Medico");
            DropIndex("dbo.Medico", new[] { "Medico_IdMedico" });
            DropColumn("dbo.Medico", "Medico_IdMedico");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Medico", "Medico_IdMedico", c => c.Int());
            CreateIndex("dbo.Medico", "Medico_IdMedico");
            AddForeignKey("dbo.Medico", "Medico_IdMedico", "dbo.Medico", "IdMedico");
        }
    }
}
