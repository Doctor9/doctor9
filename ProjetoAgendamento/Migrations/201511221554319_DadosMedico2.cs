namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DadosMedico2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Medico", "SexoMasculino", c => c.Boolean());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Medico", "SexoMasculino", c => c.Boolean(nullable: false));
        }
    }
}
