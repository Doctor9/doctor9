namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DadosMedico : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Medico", "DataNascimento", c => c.DateTime());
            AddColumn("dbo.Medico", "SexoMasculino", c => c.Boolean(nullable: false));
            AddColumn("dbo.Medico", "Disponibilidade", c => c.DateTime());
            AddColumn("dbo.Medico", "Telefone", c => c.String());
            AddColumn("dbo.Medico", "Email", c => c.String());
            AddColumn("dbo.Medico", "Observacoes", c => c.String());
            AddColumn("dbo.Medico", "Ativo", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Medico", "Nome", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Medico", "Nome", c => c.String());
            DropColumn("dbo.Medico", "Ativo");
            DropColumn("dbo.Medico", "Observacoes");
            DropColumn("dbo.Medico", "Email");
            DropColumn("dbo.Medico", "Telefone");
            DropColumn("dbo.Medico", "Disponibilidade");
            DropColumn("dbo.Medico", "SexoMasculino");
            DropColumn("dbo.Medico", "DataNascimento");
        }
    }
}
