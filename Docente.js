import User from "./User.js";
class Docente extends User{
    constructor(nome,email,role){
        super(nome,email,role)
    }

    aprovaEstudante(nome,curso){

        return `Estudante ${nome} passo no curso ${curso}, Responsável: ${this.nome}`;

    }
}

    // Instanciando embaixo da classe.
    // Preciso guardar a instancia em uma const.

    const novoDocente = new Docente('Diloca','didi@email','professora');
    console.log(novoDocente.aprovaEstudante('neny','miar'));
    


