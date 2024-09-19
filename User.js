// Lembrando que para importação e exportação funcionar é preciso fazer algumas configurações.
// no terminal: npm init -y
// incluir chave: valor => "type": "module",
export default class User {
    // As classes em JS usam uma função construtora.
    // Encapsulando com #
    #nome; #email; #nascimento; #role; #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {

        this.#nome = nome; // #nome é diferente de nome.
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante"; // Passando um valor por padrão, quando não receber nada.
        this.#ativo = ativo;

    }
    // Criando os getters
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email;
    }
    get nascimento(){
        return this.#nascimento;
    }
    get role(){
        return this.#role;
    }
    get ativo(){
        return this.#ativo;
    }

    
 
    // Os métodos fora da função construtora.
    exibirInfo() {
        return `${this.#nome} ,${this.#email}, ${this.#role}, ${this.#ativo}`;
    }


    // Testando um método() privado.
  

    #privadoNome(texto){
        console.log('Retorna erro fora da classe. ', texto);
    }

   

    

}

let teste = new User('pato','pato@email','2009');

//console.log(teste.#privadoNome());

const userTestaMetodo = new User('jana', 'jan@email', '1980/2-6');

// Instanciando elementos da classe.
const novoUser = new User("Alan", "alan@email.com", "20/12/1969", "Developer")
console.log(novoUser);
console.log(novoUser.exibirInfo())
// testando o método privado dentro da própria classe.






