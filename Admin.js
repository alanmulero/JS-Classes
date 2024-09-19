// Criar as classes sempre com letra maiusculas, por padrão.
import User from "./User.js";
import Docente from "./Docente.js";
export default  class Admin extends User {
	// Passando o que eu quero que a classe herde. No construtor.
	constructor(nome, email, nascimento, role = "adimin", ativo = "true") {
		super(nome, email, nascimento, role, ativo)

	}
	// Metodo para criar curso.
	criaCurso(usuario,nomeCurso){
		return usuario.curso = nomeCurso;
	}

	// Metodo excluir curso

	excluiCurso(usuario,nomeCurso){
		return delete usuario.curso;
	}

	//


	}


// Instanciando classe filha admin.

const novoAdmin = new Admin("Ana","alan@email","04-09/2006","gerente adm",);
novoAdmin.criaCurso(novoAdmin,'Java');
//novoAdmin.excluiCurso(novoAdmin,'Java');
console.log(novoAdmin);
// Testando encapsulamento com #
const usuarioEncapsulado = new User('Neny','Gordona','neny@email.com','2023-02-05');
console.log(usuarioEncapsulado);
console.log(usuarioEncapsulado.nome); // agora usando o get()
// Testando o setter()
usuarioEncapsulado.nome = 'Nene Gorda';
console.log(usuarioEncapsulado.nome);
// testando set e get de email:
console.log(usuarioEncapsulado.email);
usuarioEncapsulado.email = 'novoemail@.com';
console.log(usuarioEncapsulado.email);



