import User from "./User.js";
export default class Docente extends User {
    constructor(nome, email, nascimento, role) {
        super(nome, email, nascimento, role);

    }

    aprovaEstudante(nome, curso) {

        return `Estudante ${nome} passou no curso ${curso}, Responsável: ${this.nome}`;
    }

}




// Instanciando embaixo da classe.
// Preciso guardar a instancia em uma const.

const novoDocente = new Docente('Diloca', 'didi@email', 'professora');
const docente2 = new Docente('Matilda', 'mt@email', 'diretora');
console.log(novoDocente.exibirInfo());
console.log(novoDocente);
console.log(docente2);
console.log(novoDocente.aprovaEstudante('neny', 'miar'));
console.log(docente2.aprovaEstudante('mulerinho', 'Java'));
const mudaNome = new User('Fernanda','fe@email','1995-05-03',);
console.log(mudaNome);
