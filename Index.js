import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Juju','juju@email','2008-9-5');
console.log('NovoUser: ',novoUser);
novoUser.nome = 'Jubinaguara';
console.log(novoUser.nome); // Cuidado: #nome é diferente de nome. Isso cria outro nome
console.log(novoUser.exibirInfo());
// Abaixo a forma encapsulada.
//novoUser.#nome = 'Mulerinho';  = private, detalhe da #

// Tentando exibir um método() privado, vou obter um erro.
//console.log(#testaMetodoPrivado());

// Testando metodo statico.
const testaStatico = User.matriculaPaga('sim');
console.log(testaStatico);

