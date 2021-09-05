//! Módulos
//? Exportando
//* JS
// export default class Somador {
//    public somar = (numero1: number, numero2: number) => {
//       return numero1 + numero2
//    }
// }

//* TS
class Somador {
   public somar = (numero1: number, numero2: number) => {
      return numero1 + numero2
   }
}

export default Somador

// importando + de 1 elemento

import {Somador, Subtrador} from 'calculos'

let somador = new Somador()
let subtrador = new Subtrador()

console.log(somador.calcular(2, 2))
console.log(subtrador.calcular(10, 5))

