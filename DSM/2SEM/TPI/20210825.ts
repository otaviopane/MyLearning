/*--somador.ts--*/

class Somador {
   public somar(numero1: number, numero2: number) {
      return numero1 + numero2
   }
}

let somador = new Somador()

console.log(somador.somar(10, 5))