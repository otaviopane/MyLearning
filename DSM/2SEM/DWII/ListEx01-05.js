// /*LISTA DE EXERCÍCIOS 01 - Ex 05*/
// 5.Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
// Considere os seguintes critérios:

// 1) Ao executar o script a aplicação deve solicitar a entrada de um número,
// seguido de uma operação de soma ou subtração e
// posteriormente seguido de um segundo número.
var num1 = prompt("Digite o primeiro valor: ");
num1 = parseFloat(num1);

var operador = prompt("Escolha o operador: \n soma \n subtração").toLowerCase();

var num2 = prompt("Digite o segundo valor: ");
num2 = parseFloat(num2);

// 2) A operação deve ser inserida pelo usuário de forma textual, ou seja,
// quando o sistema solicita a operação o usuário deve
// informar o texto ‘soma’ ou ‘subtração’ (sem asaspas).
if (operador == "soma") {
  document.write(`O resultado é: ${soma(num1, num2)}`);
}
if (operador == "subtração") {
  document.write(`O resultado é: ${subtracao(num1, num2)}`);
}
// 3) Na sequência o sistema deve enviar os parâmetros
// para uma função efetuar o devido cálculo.
// Exemplo: calculo(num1, num2, operacao).
function soma(num1, num2) {
  var resultado = num1 + num2;
  return resultado;
}
function subtracao(num1, num2) {
  var resultado = num1 - num2;
  return resultado;
}

// 4) A função deve executar o cálculo com base na operação informada
// pelo usuário e na sequência deve retornar o valor encontrado.

// 5) Ao término o sistema deve fornecer a seguinte saída para o usuário:
// “O resultado é: <resultado>.
// ”*A informação em vermelho é uma variável e deve ser
// substituída pelo seu respectivo valor calculada dentro da aplicação.
