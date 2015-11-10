namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Especialidade : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Especialidade", "Especialidade_IdEspecialidade", "dbo.Especialidade");
            DropIndex("dbo.Especialidade", new[] { "Especialidade_IdEspecialidade" });
            DropColumn("dbo.Especialidade", "Especialidade_IdEspecialidade");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Especialidade", "Especialidade_IdEspecialidade", c => c.Int());
            CreateIndex("dbo.Especialidade", "Especialidade_IdEspecialidade");
            AddForeignKey("dbo.Especialidade", "Especialidade_IdEspecialidade", "dbo.Especialidade", "IdEspecialidade");
        }
    }
}
