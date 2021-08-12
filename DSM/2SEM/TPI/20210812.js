class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  get pegar() {
    return "Meu nome é: " + this.nome;
  }

  qualquer() {
    return "Método qualquer!!!";
  }
}

let p1 = new Pessoa("Jorge");

console.log(p1.nome);
