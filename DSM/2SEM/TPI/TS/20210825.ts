/*--Comparando os códigos--*/
// TS
class Somador {
   public somar(numero1: number, numero2: number) {
      return numero1 + numero2
   }
}

let somador = new Somador()

console.log(somador.somar(10, 5))

//JS
var Somador = /** @class */ (function () {
   function Somador() {
   }
   Somador.prototype.somar = function (numero1, numero2){
      return numero1 + numero2;
   };
   return Somador
}());

var somador = new Somador();

console.log(somador.somar(10, 5));

/*--Ex Aula--*/
class BoasVindas{
   public mensagem = (mensagem:string) => { // nomeDaVariavel:tipo_da_variavel
      return `Bem-vindo a linguagem TypeScript ${mensagem}`
   }
}

let boasVindas = new BoasVindas() 
//variáveis começam com letra minúscula (boasVindas)
//objetos começam com letra maiúscula (BoasVindas)

console.log(boasVindas.mensagem('Giovana'))