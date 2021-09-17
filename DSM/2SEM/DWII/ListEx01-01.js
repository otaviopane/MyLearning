/*LISTA DE EXERCÍCIOS 01 - Ex 01*/
// 1. Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
// Considere os seguintes critérios:
// 1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.

let nome = prompt("Digite o seu nome: ").toLowerCase();
let firstLetter = nome.charAt(0).toUpperCase();
nome = firstLetter + nome.slice(1);
alert(`Olá ${nome}, tudo bem?`);

// 2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
let altura = prompt("Digite a sua altura (cm): ");
alert(`${nome}, sua altura é ${altura} cm.`);

// 3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
let peso = prompt("Digite o seu peso (kg)");
alert(`${nome}, seu peso é ${peso} kg`);

// 4) Após as entradas de dados, atente-se a conversão das informações para dados do tipo float.
altura = parseFloat(altura);
peso = parseFloat(peso);

// 5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
let alturaM = altura / 100;
alert(`Então, ${nome}, sua altura é ${alturaM} m.`);

// 6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão:
// M = peso (quilos) ÷ altura²
let M = peso / alturaM ** 2;
M = M.toFixed(2);

// 7) Após identificar o índice de massa corporal
// o sistema deverá classificar em faixas descritivas utilizando os
// critérios abaixo:
// a) Se M estiver abaixo de 16 : Baixo peso muito grave
// b) Se M estiver entre 16 e 16,99: Baixo peso grave
// c) Se M estiver entre 17 e 18,49: Baixo peso
// d) Se M estiver entre 18,50 e 24,99: Peso normal
// e) Se M estiver entre 25 e 29,99: Sobrepeso
// f) Se M estiver entre 30 e 34,99: Obesidade grau I
// g) Se M estiver entre 35 e 39,99: Obesidade grau II
// h) Se M for maior que 40: Obesidade grau III

if (M < 16) {
  var faixa = "Baixo peso muito grave";
} else if (16 <= M && M < 17) {
  var faixa = "Baixo peso grave";
} else if (17 <= M && M < 18.5) {
  var faixa = "Baixo peso";
} else if (18.5 <= M && M < 25) {
  var faixa = "Peso normal";
} else if (25 <= M && M < 30) {
  var faixa = "Sobrepeso";
} else if (30 <= M && M < 35) {
  var faixa = "Obesidade grau I";
} else if (35 <= M && M < 40) {
  var faixa = "Obesidade grau II";
} else {
  var faixa = "Obesidade grau III";
}

// 8) Ao término o sistema deve fornecer a seguinte saída para o usuário:
// “<Nome> possui índice de massa corporal igual a <m> , sendo classificado como: .” *As informações em
// vermelho são variáveis e devem ser substituídas pelos seus respectivos valores calculadas dentro da
// aplicação.
alert(
  `${nome} possui índice de massa corporal igual a ${M},\n sendo classificado como: ${faixa}.`
);

// ----------------------------------------------------------------
