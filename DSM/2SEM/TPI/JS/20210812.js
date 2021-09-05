/*--Função construtora--*/
function Pokemon(nome) {
    this.nome = nome;
  }

  let poke001 = new Pokemon('Bulbasaur')
  poke1.tipo = "Planta"

  let poke002 = new Pokemon('Ivysaur')

  console.log(poke2.tipo)


/*--Adicionando métodos--*/

function Pokemon(nome, tipo) {
  this.nome = nome,
  this.tipo = tipo;
    this.detalhe = function() {
      return this.nome + '\n' + this.tipo
    }
}

let poke003 = new Pokemon('Venusaur', 'Planta')

console.log("Detalhes do Pokemon: \n" + poke003.detalhe())

/*--Propriedades com valor pré-fixado--*/

function Pokemon(nome) {
  this.nome = nome,
  this.treinador = 'Ash Ketchum';
}

const poke004 = new Pokemon('Charmander')
const poke005 = new Pokemon('Charmeleon')

console.log("Treinador do Pokemon: \n" + poke004.treinador + " = " + poke004.nome)
console.log("Treinador do Pokemon: \n" + poke005.treinador + " = " + poke005.nome)

/*--Protótipo e herança--*/

function Pokemon(nome, tipo) {
  this.nome = nome
  this.tipo = tipo
}

const poke006 = new Pokemon('Charizard', 'Fogo')

Pokemon.prototype.descricao = function() {
  return 'Nome: ' + this.nome + '\n' + 'Tipo: ' +this.tipo
}

console.log("Descrição:\n" + poke006.descricao())

/*--Protótipo por debaixo dos panos--*/

function Pokemon(nome, tipo) {
  // A palavra-chave new adiciona implicitamente a linha:
  // var this = Object.create(Pokemon.prototype)

  this.nome = nome
  this.tipo = tipo

  // Por fim, a função retorna implicitamente este valor:
  // return this
}

/*--Adicionando métodos de acesso--*/

function Pokemon(nome, tipo) {
  this.nome = nome
  this.tipo = tipo
  Object.defineProperty(this, 'descricao', {
    get: function () {
      return 'Nome: ' + this.nome + "\n" + "Tipo: " + this.tipo
    }
  })
}

let poke007 = new Pokemon('Squirtle', 'Água')

console.log("Descrição:\n" + poke007.descricao)

/*--Classes e herança--*/
/*--Classes--*/

class Pokemon{
  constructor(nome,tipo){
    this.nome = nome
    this.tipo = tipo
  }
}

let poke008 = new Pokemon('Wartortle', 'Água')

console.log('Nome: ' + poke008.nome + '\nTipo: ' + poke008.tipo)

/*--Get na Classe--*/

class Pokemon{
  constructor(nome) {
    this.nome = nome
  }
  get pegar() {
    return 'Qual é esse Pokemon? ' + this.nome
  }
}

let poke009 = new Pokemon('Blastoise')

console.log('Nome: ' + poke009.nome)