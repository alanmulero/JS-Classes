// Criar as classes sempre com letra maiusculas, por padrão.
import User from "./User.js";
class Admin extends User{
	// Passando o que eu quero que a classe herde. No construtor.
	constructor(nome,email,nascimento,role="adimin",ativo="true"){

		super(nome,email,nascimento,role,ativo)

	}

	criarCurso(nomeCurso,qtdVagas){
		return `Curso ${nomeCurso} criado, com ${qtdVagas} vagas`;

	}
}

// Instanciando classe filha admin.

const novoAdmin = new Admin("Pituca","pituca@email.com","2002-01-01");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
console.log(novoAdmin.criarCurso('Developer',20));