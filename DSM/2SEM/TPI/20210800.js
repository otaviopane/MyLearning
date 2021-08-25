/*--Estruturas de repetição--*/
let sortear = (possibilidades) => {
  let numeroSorteado = Math.floor(Math.random() * possibilidades);
  return numeroSorteado;
};

let sorteio = (numeros, quantidadeSorteios) => {
  let numerosSorteados = [];
  do {
    let indiceSorteado = sortear(numeros.length);

    let numeroSorteado = numeros[indiceSorteado];

    numerosSorteados.push(numeroSorteado);

    removerElemento(numeros, numeroSorteado);
  } while (numerosSorteados.length < quantidadeSorteios); //A condição de parada aparece no final do loop

  return numerosSorteados;
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let resultado = sorteio(numeros, 3);

console.log(resultado);
/*---*/
