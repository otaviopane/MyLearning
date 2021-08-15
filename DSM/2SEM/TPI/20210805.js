/*--20210805--*/

console.log("iniciando com o JavaScript em back-end");

/*---*/

let steveRogers = "Capitão América";
var tonyStark = "Homem de Ferro";
console.log("Super-heróis da Marvel: " + steveRogers + " " + tonyStark);

/*---*/

let pagamento = 1500.5;
var conta = 2356;
console.log("Fazer pagamento de: " + pagamento + " Na conta: " + conta);

/*---*/

var nome = "Príncipe T'Challa";
console.log("Meu nome é: " + nome);
nome = "Black Panther";
console.log("Meu nome é: " + nome);

/*--Var--*/

var nome = "Gerson";

nome = "Alberto";

console.log("Nome: " + nome);

/*--Hoisting--*/

nome = "Jorge";
console.log("Nome: " + nome);

var nome;

/*--Hoisting--*/

nome = "Rei T'Challa";
console.log("Meu nome é: " + nome);
nome = "King Black Panther";
console.log("Meu nome é: " + nome);

var nome;

/*--Hoisting--*/

if (numero_1 < numero_2) {
  /* não será executado */
  console.log("numero 1 é menor que o numero 2");
}
var numero_1 = 10;
var numero_2 = 20;

/*--Hoisting--*/

if (true) {
  var hulk = "Eric Bana";
  console.log(hulk);
}
console.log(hulk);

/*--Var--*/

if (true) {
  var nome = "Gerson";
  console.log(nome);
}
console.log(nome);

/*--Let--*/

let hulk = "Eric Bana";
let hulk = "Mark Ruffalo"; //ERRO! A variavel 'nome' já foi declarada
console.log(hulk);

if (true) {
  let hulk = "Mark Ruffalo";
  console.log(hulk);
}
console.log(hulk); //ERRO! A variavel nome não é definida

/*--Let--*/

let pokemon = "Squirtle"; //-------------------------------//
if (true) {
  let pokemon = "Bulbasaur"; //  ESCOPO    //  ESCOPO    //
  console.log(pokemon); // BULBASAUR  //  SQUIRTLE  //
}
console.log(pokemon); //------------------------------//

/*--Const--*/

let pokemon; // Pode ficar provisóriamente como 'Indefinido'
pokemon = "Squirtle";
console.log(pokemon);

const pokemon // NÃO pode ficar provisóriamente como 'Indefinido'
pokemon = "Squirtle";
console.log(pokemon);

const pokemon = "Squirtle"; // ASSIM SIM
console.log(pokemon);

/*--Dados do tipo Objeto--*/
let idade = 80; //Number
let nome = "Steve"; //String
let capitao = { nome: "Steve Rogers", idade: 80 }; //Object
console.log(
  "Nome do personagem: " + capitao.nome + " idade: " + capitao["idade"]
);

/*--Funções--*/
function potencia(base, expoente){ // Parâmetros ou Argumentos
  return base ** expoente // base ^ (elevada) ao expoente
}

resultado = potencia(2,3)
console.log(resultado)

let calcPotencia = new Function('base, expoente', 'return base ** expoente')
//function novafunção('Argumentos', 'corpo que sera executado')
resultado = calcPotencia(2,3)
console.log(resultado)

/*--Métodos--*/

const personagem = {
  apelido: 'Super Choque',
  nome: 'Virgil Hawkins',
  habilidades: 'eletricidade',
  descricao: function () {
    return "Nome: " + this.nome + " Apelido: " + this.apelido + " poderes: " + this.habilidades
  }
}
console.log(personagem.descricao())

/*--Vars c/ funções--*/

soma = function (valor1,  valor2) {
  return valor1 + valor2
}
console.log("Valor da soma: " + soma(3, 5))

let potencia = function(base, expoente){
  return base ** expoente 
}
console.log(potencia(2,4))

/*--Arrow Functions--*/

soma = (valor1,  valor2) => {
  return valor1 + valor2
}
console.log("Valor da soma: " + soma(3, 5))

soma = (valor1,  valor2) => valor1 + valor2

console.log("Valor da soma: " + soma(3, 5))