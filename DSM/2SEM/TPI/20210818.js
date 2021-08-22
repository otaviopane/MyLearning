/*--Outra de definir a classe--*/

let Pokemon = class {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
};

let poke010 = new Pokemon("Caterpie", "Inseto");

console.log(poke010.nome);

/*--Corpo da classe--*/

class Pokemon {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

let poke011 = new Pokemon("Metapod", "Inseto");

console.log(poke011.nome);

/*--Métodos--*/

let Pokemon = class {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  descricao() {
    return "Nome: " + this.nome + " - " + this.tipo;
  }
};

let poke012 = new Pokemon("Butterfree", "Inseto");

console.log(poke012.descricao());

/*--Métodos de acesso--*/

class Pokemon {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  get obterNome() {
    return this.nome;
  }
}

let poke013 = new Pokemon("Weedle", "Inseto");

console.log(poke013.nome);

/*--Class fields--*/

class Pokemon {
  nome;
  tipo;
  treinadorPokemon;
  constructor(nome, tipo, treinadorPokemon) {
    this.nome = nome;
    this.tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }
}

/*---*/

class Pokemon {
  nome = "???";
  tipo;
}

let poke = new Pokemon();

console.log("Nome: " + poke.nome + " - " + "Tipo: " + poke.tipo);

/*--Herança--*/

class Pokemon {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

class PokemonTreinado extends Pokemon {
  constructor(nome, tipo, treinadorPokemon) {
    super(nome, tipo);
    this.treinadorPokemon = treinadorPokemon;
  }
}

let poke014 = new PokemonTreinado("Kakuna", "Inseto", "Yellow");

console.log(poke014);

/*--Classes e encapsulamento--*/

class Pokemon {
  constructor(nome, tipo, treinadorPokemon) {
    this.nome = nome;
    this.tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }
}

let poke015 = new Pokemon("Beedrill", "Inseto", "Yellow");

poke015.tipo = "Dragão";

console.log("Qual o tipo de " + poke015.nome + ": " + poke015.tipo);

/*--Privar/bloquear classe--*/

class Pokemon {
  #nome; // Esse tipo de estrutura com #
  #tipo; // é chamada de hash name
  constructor(nome, tipo, treinadorPokemon) {
    this.#nome = nome;
    this.#tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }
}

let poke016 = new Pokemon("Pidgey", "Voador", "Ash");

console.log(poke016);

/*---*/

class Pokemon {
  #nome; // Esse tipo de estrutura com #
  #tipo; // é chamada de hash name
  constructor(nome, tipo, treinadorPokemon) {
    this.#nome = nome;
    this.#tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }

  get obterTipo() {
    return this.#tipo;
  }
}

let poke017 = new Pokemon("Pidgeotto", "Voador", "Ash");

console.log(poke017.obterTipo);

/*--Privar/bloquear métodos--*/

class Pokemon {
  #nome;
  #tipo;
  constructor(nome, tipo, treinadorPokemon) {
    this.#nome = nome;
    this.#tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }

  #colocarMaiusculo(texto) {
    return texto.toUpperCase();
  }

  mostrarDetalhes() {
    return (
      "Nome do Pokemon: " +
      this.#colocarMaiusculo(this.obterNome) +
      "\nTipo do Pokemon: " +
      this.#colocarMaiusculo(this.obterTipo)
    );
  }

  get obterNome() {
    return this.#nome;
  }

  get obterTipo() {
    return this.#tipo;
  }
}

let poke018 = new Pokemon("Pidgeot", "Voador", "Ash");

console.log("Detalhes: \n" + poke018.mostrarDetalhes());

/*--Atributos/Métodos estáticos--*/

class Pokemon {
  static localizaçãoGeral;
  constructor(nome, tipo, treinadorPokemon) {
    this.nome = nome;
    this.tipo = tipo;
    this.treinadorPokemon = treinadorPokemon;
  }
}

Pokemon.localizaçãoGeral = "Kanto";

console.log("Localização do Pokemon: \n" + Pokemon.localizaçãoGeral);
