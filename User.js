class User {
    // As classes em JS usam uma função construtora.
    constructor(nome,email,nascimento,role,ativo = true) {

        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante"; // Passando um valor por padrão, quando não receber nada.
        this.ativo = ativo;

    }
    // Os métodos fora da função construtora.
    exibirInfo()
    {
        return `${this.nome} ,${this.email}, ${this.role}, ${this.ativo}`;
    }





}

    // Instanciando elementos da classe.
    const novoUser = new User("Alan","alan@email.com","20/12/1969","Developer")
    console.log(novoUser);
console.log(novoUser.exibirInfo())




