namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Secretaria : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Usuario", "Tipo", c => c.Int(nullable: false));
            DropColumn("dbo.Usuario", "CodVinculo");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Usuario", "CodVinculo", c => c.Int(nullable: false));
            DropColumn("dbo.Usuario", "Tipo");
        }
    }
}
