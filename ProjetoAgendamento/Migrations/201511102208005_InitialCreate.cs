namespace ProjetoAgendamento.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AgendamentoPolitica",
                c => new
                    {
                        idPolitica = c.Int(nullable: false, identity: true),
                        idMedico = c.Int(nullable: false),
                        idEspecialidade = c.Int(nullable: false),
                        descricao = c.String(),
                    })
                .PrimaryKey(t => t.idPolitica);
            
            CreateTable(
                "dbo.Agenda",
                c => new
                    {
                        idAgenda = c.Int(nullable: false, identity: true),
                        idMedico = c.Int(nullable: false),
                        idEspecialidade = c.Int(nullable: false),
                        dataConsulta = c.String(),
                        horarioConsulta = c.String(),
                    })
                .PrimaryKey(t => t.idAgenda);
            
            CreateTable(
                "dbo.Consulta",
                c => new
                    {
                        IdConsulta = c.Int(nullable: false, identity: true),
                        idPaciente = c.Int(nullable: false),
                        idEspecialidade = c.Int(nullable: false),
                        idMedico = c.Int(nullable: false),
                        dataAgendamento = c.String(),
                        dataConsulta = c.String(),
                        horarioConsulta = c.String(),
                        observacoes = c.String(),
                    })
                .PrimaryKey(t => t.IdConsulta);
            
            CreateTable(
                "dbo.Especialidade",
                c => new
                    {
                        IdEspecialidade = c.Int(nullable: false, identity: true),
                        NomeEspecialidade = c.String(),
                        Descricao = c.String(),
                        Especialidade_IdEspecialidade = c.Int(),
                    })
                .PrimaryKey(t => t.IdEspecialidade)
                .ForeignKey("dbo.Especialidade", t => t.Especialidade_IdEspecialidade)
                .Index(t => t.Especialidade_IdEspecialidade);
            
            CreateTable(
                "dbo.Medico",
                c => new
                    {
                        IdMedico = c.Int(nullable: false, identity: true),
                        Nome = c.String(),
                        idEspecialidade = c.Int(nullable: false),
                        CRM = c.Int(nullable: false),
                        Medico_IdMedico = c.Int(),
                    })
                .PrimaryKey(t => t.IdMedico)
                .ForeignKey("dbo.Especialidade", t => t.idEspecialidade, cascadeDelete: true)
                .ForeignKey("dbo.Medico", t => t.Medico_IdMedico)
                .Index(t => t.idEspecialidade)
                .Index(t => t.Medico_IdMedico);
            
            CreateTable(
                "dbo.Tela",
                c => new
                    {
                        idTela = c.Int(nullable: false, identity: true),
                        codTela = c.Int(nullable: false),
                        DataConsulta = c.String(),
                        HorarioConsulta = c.String(),
                    })
                .PrimaryKey(t => t.idTela);
            
            CreateTable(
                "dbo.Usuario",
                c => new
                    {
                        IdPaciente = c.Int(nullable: false, identity: true),
                        Login = c.String(),
                        Senha = c.String(),
                        CodVinculo = c.Int(nullable: false),
                        Nome = c.String(),
                        Apelido = c.String(),
                        IdMedico = c.Int(),
                    })
                .PrimaryKey(t => t.IdPaciente)
                .ForeignKey("dbo.Medico", t => t.IdMedico)
                .Index(t => t.IdMedico);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Usuario", "IdMedico", "dbo.Medico");
            DropForeignKey("dbo.Medico", "Medico_IdMedico", "dbo.Medico");
            DropForeignKey("dbo.Medico", "idEspecialidade", "dbo.Especialidade");
            DropForeignKey("dbo.Especialidade", "Especialidade_IdEspecialidade", "dbo.Especialidade");
            DropIndex("dbo.Usuario", new[] { "IdMedico" });
            DropIndex("dbo.Medico", new[] { "Medico_IdMedico" });
            DropIndex("dbo.Medico", new[] { "idEspecialidade" });
            DropIndex("dbo.Especialidade", new[] { "Especialidade_IdEspecialidade" });
            DropTable("dbo.Usuario");
            DropTable("dbo.Tela");
            DropTable("dbo.Medico");
            DropTable("dbo.Especialidade");
            DropTable("dbo.Consulta");
            DropTable("dbo.Agenda");
            DropTable("dbo.AgendamentoPolitica");
        }
    }
}
