## Deploy

### Pré-requisitos

* MSBuild
* Microsoft SQL Server 2008 ou superior
* IIS 7 ou superior

### Banco de dados

A string de conexão fica dentro do arquivo `web.config`, na seção `ConnectionStrings`, com o nome `DefaultConnection`. Pode ser necessário alterar o servidor, instância, usuário e senha.

### Comandos

Em um prompt com privilégios administrativos, executar os seguintes comandos no diretório raiz do projeto:

```Batchfile
set PATH=%PATH%;C:\Windows\System32\inetsrv;C:\Program Files (x86)\MSBuild\14.0\Bin
msbuild ProjetoAgendamento.sln
appcmd delete app "Default Web Site/Doctor9"
appcmd add app /site.name:"Default Web Site" /path:/Doctor9 /physicalPath:%cd%\ProjetoAgendamento\
```

O caminho do MSBuild pode variar dependendo da versão, então pode ser necessário alterar manualmente a primeira linha.

Feito isso, deve ser possível acessar a aplicação em [http://localhost/Doctor9](http://localhost/Doctor9).
