// /*LISTA DE EXERCÍCIOS 01 - Ex 03*/
// 3. Uma empresa do ramo metalmecânico está realizando uma pesquisa junto a transportadoras
// para verificar o preço do transporte de seus produtos que serão entregues a seus clientes em outros estados.

// Ao final da pesquisa, foi selecionada uma transportadora, com a qual foi fechado o transporte dos produtos.
// O cliente pode selecionar se quer a sua entrega com rastreamento ou não.
// Assim, deverá ser feita uma pergunta ao cliente.
// Deseja rastreamento (S-Sim e N-Não)?
let rastreamento = prompt(
  "A entrega será rastreada? (S-Sim e N-Não)"
).toUpperCase();
if (rastreamento == "SIM" || rastreamento == "S" || rastreamento == "S-SIM") {
  var rastrear = true;
} else if (
  rastreamento == "NÃO" ||
  rastreamento == "NAO" ||
  rastreamento == "N" ||
  rastreamento == "N-NÃO"
) {
  var rastrear = false;
} else {
  alert("Resposta invalida!");
}

// Se a resposta for “sim”, será cobrada uma taxa de R$ 200,00 pela carga.
if (rastrear == true) {
  var taxa = 200;
  taxa = parseFloat(taxa);
} else if (rastrear == false) {
  var taxa = 0;
  taxa = parseFloat(taxa);
}

// Cálculo do frete (calcular o valor pelo número de peças transportadas):
// • Três variáveis influenciam o valor do frete:
// o número de peças, a região e a distância em quilômetros.
let pecas = prompt("Quantidade de peças: ");
let regiao = prompt(
  "Região da entrega: \n1 - Sul \n2 - Sudeste \n3 - Centro-Oeste"
).toUpperCase();
let kms = prompt("Distancia em quilômetros: ");

// Região
if (regiao == "1" || regiao == "SUL" || regiao == "1 - SUL") {
  var regPreco = 1.0;
  var regDesc = 10;
} else if (regiao == "2" || regiao == "SUDESTE" || regiao == "2 - SUDESTE") {
  var regPreco = 1.2;
  var regDesc = 12;
} else if (
  regiao == "3" ||
  regiao == "CENTRO-OESTE" ||
  regiao == "3 - CENTRO-OESTE"
) {
  var regPreco = 1.3;
  var regDesc = 13;
} else {
  alert("Região indeterminada!");
}

// • Até mil peças –o valor será conforme a região apresentada na tabela abaixo.
// O valor é cobrado por cada peça transportada.
// • Acima de mil peças –valor normal para até mil peças;
// o número de peças que ultrapassar mil tem desconto conforme a região.

// Peças
if (pecas > 1000) {
  var custoPecas =
    1000 * regPreco + (pecas - 1000) * (regPreco - (regPreco / 100) * regDesc);
  custoPecas = parseFloat(custoPecas);
} else {
  var custoPecas = pecas * regPreco;
  custoPecas = parseFloat(custoPecas);
}

// Exemplo: Se um cliente comprar 1.200 peças, as quais serão enviados à região 2, que é Sudeste.
// Será cobrado frete da seguinte forma: para as mil peças, R$ 1,20 cada peça.
// Para as 200 a mais, será dado um desconto de 12% sobre o valor de R$ 1,20,
// pagando 1,056 pelo frete de cada peça das 200 restantes.
// Ficará  (1000  *  1.2)  +  (200*  1.056)  =  R$  1.411,20  de  frete  pelas  peças  transportadas.

// A  distância  para  o transporte deve ser informada, pois,
// para cada quilômetro, é cobrado um litro de combustível, que deverá ser lido ao iniciar o algoritmo.
// Distancia
var custoDist = kms * 5.8;
// Por questões de logística, a empresa realiza entregas somente para as regiões Sul,  Sudeste  e  Centro-oeste,
// e  cada  uma  possui  um  valor  de  frete  com  relação  à  quantidade  de  peças transportadas, conforme a tabela:

// Desenvolva uma aplicação JS que efetue a leitura da distância
// em quilômetros do frete, a quantidade de peças que serão transportadas,
// a região (em número) e determine se o cliente quer rastreamento.

// Calcule e imprima o valor final do frete.
let valorFinal = custoDist + taxa + custoPecas;

// Ao término, devem ser exibidas as seguintes informações:
// Taxa do rastreamento: 999,99
// Valor do frete pelas peças: 9999.99
// Valor do frete por quilômetro: 999.99
// Total do frete: 999.99
document.write(
  `Informações: 
  <br>Taxa do rastreamento: ${taxa}
  <br>Valor do frete pelas peças: ${custoPecas}
  <br>Valor do frete por quilômetro: ${custoDist}
  <br>Total do frete: ${valorFinal}`
);
