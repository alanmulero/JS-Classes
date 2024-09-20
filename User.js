// Lembrando que para importação e exportação funcionar é preciso fazer algumas configurações.
// no terminal: npm init -y
// incluir chave: valor => "type": "module",
export default class User {
    // As classes em JS usam uma função construtora.
    // Encapsulando com #
    #nome; #sobrenome;  #email; #nascimento; #role; #ativo;
    constructor(nome,sobrenome, email, nascimento, role, ativo = true) {

        this.#nome = nome; // #nome é diferente de nome.
        this.#sobrenome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante"; // Passando um valor por padrão, quando não receber nada.
        this.#ativo = ativo;

    }
    // Criando os getters
    get nome(){
        return this.#nome;
    }
    get sobrenome(){
        return this.#sobrenome;
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

    // setters
    // juntando nome e sobrenome em uma unica saida
    set nome(novoNome){
    
        this.#nome = novoNome;
    }

    set email(novoEmail){
        if(!novoEmail.includes('@')){
            throw new Error('Tem que ter o @ no email.')
            
        }else{
        this.#email = novoEmail;}
    }

    
 
    // Os métodos fora da função construtora.
    exibirInfo() {
        return `${this.#nome} ,${this.#email}, ${this.#role}, ${this.#ativo}`;
    }


    // Testando um método() privado.
  

    #privadoNome(texto){
        console.log('Retorna erro fora da classe. ', texto);
    }

   
    // Métodos staticos.
    static matriculaPaga(texto){
        // retorno na classe Index.js
        return `A matricula esta paga? ${texto}`;
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






