/*--Estruturas de repetição--*/
let removerElemento = (numeros, elemento) => {
  for (var indice = 0; indice < numeros.length; indice++) {
    // A condição de parada aparece no início do loop
    if (numeros[indice] === elemento) {
      numeros.splice(indice, 1);
    }
  }
};

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

/*--For in--*/

let empresa = { razaoSocial: "ABC LTDA", nomeFantasia: "Mercado Online" };

for (valor in empresa) {
  console.log(valor);
}

/*--For in--*/

let estadosSudeste = new Set(["ES", "SP", "MG", "RJ"]);

for (let valores of estadosSudeste) {
  console.log(valores);
}

/*--Estruturas de dados--*/

/*--Map--*/

let estrutura = new Map();

estrutura.set(1, "12");

estrutura.set("funcao", function () {
  return "função anônima dentro do map";
});

console.log(estrutura.get(1));

console.log(estrutura.get("funcao")());

/*---*/

let estrutura = new Map();

estrutura.set(1, "12");

estrutura.set(1, "120");

console.log(estrutura.get(1));

/*---*/

let estrutura = new Map();

estrutura.set(1, "120");

estrutura.set(2, "120");

console.log(estrutura.get(1));
console.log(estrutura.get(2));

/*---*/

let estrutura = new Map();
estrutura.set(1, "120");
estrutura.set(2, "120");

console.log("tamanho da estrutura: " + estrutura.size);
console.log(estrutura.keys());
console.log(estrutura.values());

/*---*/

let estrutura = new Map();
estrutura.set(1, "120");
estrutura.set(2, "120");

console.log("tamanho da estrutura: " + estrutura.size);
estrutura.delete(1);
console.log("tamanho da estrutura: " + estrutura.size);
estrutura.clear();
console.log("tamanho da estrutura: " + estrutura.size);

/*--Set--*/

let estrutura = new Set();

estrutura.add(1);
estrutura.add(function () {
  return "função dentro do set";
});
estrutura.add("1");

console.log(estrutura.size);
