// /*LISTA DE EXERCÍCIOS 01 - Ex 04*/
// Sabendo que uma rede hoteleira deseja informatizar sua folha de pagamento,
// desenvolva em pseudocódigo uma solução conforme regras apresentadas pela empresa,
// de acordo com as especificações abaixo:

// O funcionário possui os seguintes dados de entrada:
// código,
// número de horas trabalhadas no mês,
// turno de trabalho (M –matutino, V –vespertino ou N –noturno),
// categoria (F –funcionário, G –gerente).
var funCod = prompt("Código do funcionário: ");
var hrsMes = prompt("Horas trabalhadas no mês: ");
var turno = prompt(
  "Turno de trabalho: \nM - matutino, \nV - vespertino ou \nN - noturno"
).toUpperCase();
var categoria = prompt(
  "Categoria do funcionário: \nF - funcionário, \nG - gerente"
).toUpperCase();

// Faça um algoritmo que:
// -Leia as informações dos funcionários:
// código (inteiro),
funCod = parseInt(funCod);
// número de horas trabalhadas (inteiro) no mês,
hrsMes = parseInt(hrsMes);
// turno (caractere) e
// categoria (caractere).

// Não leia somente o valor da hora trabalhada (real), pois será calculada.
// -Considere sempre a digitação de uma única letra para representar o turno de trabalho
// e a categoria do funcionário, conforme as tabelas:

// -Calcule o valor da hora trabalhada,
// conforme as regras apresentadas na tabela a seguir.
// O valor do salário-mínimo deve ser solicitado pelo algoritmo,
// pois ele varia de estado para estado e
// a rede de hotéis está distribuída por todo o País.
var salMin = prompt("Salário-mínimo do seu estado: ");
salMin = parseFloat(salMin);

// Utilizar o comando de seleção múltipla
// (ou um comando escolha e outro pode ser se encadeado –não utilizar se simples para esse item)
// para testar a categoria e o turno para calcular o valor da hora trabalhada.

switch (categoria) {
  case "G":
    alert("GERENTE");
    switch (turno) {
      case "M":
        alert("MATUTINO");
        var valorHora = (salMin / 100) * 4;
        break;
      case "V":
        alert("VESPERTINO");
        var valorHora = (salMin / 100) * 4;
        break;
      case "N":
        alert("NOTURNO");
        var valorHora = (salMin / 100) * 8; //chutei pq não fala
        break;
      default:
        alert("Turno não identificado!");
    }
    break;
  case "F":
    alert("FUNCIONÁRIO");
    switch (turno) {
      case "M":
        alert("MATUTINO");
        var valorHora = (salMin / 100) * 1;
        break;
      case "V":
        alert("VESPERTINO");
        var valorHora = (salMin / 100) * 1;
        break;
      case "N":
        alert("NOTURNO");
        var valorHora = (salMin / 100) * 2;
        break;
      default:
        alert("Turno não identificado!");
    }
    break;
  default:
    alert("Categoria não identificada!");
}

// -Calcule o salário inicial do funcionário com base no valor da hora trabalhada
// e no número de horas trabalhadas.
var salInic = valorHora * hrsMes;

// -Calcule o valor do auxílio-alimentação recebido pelo funcionário
// de acordo com seu salário inicial, conforme a tabela a seguir.
// Utilizar o comando de seleção composto encadeado.

switch (true) {
  case salInic < 800:
    var auxAli = salInic / 4;
    break;
  case salInic < 1200:
    var auxAli = salInic / 5;
    break;
  case salInic >= 1200:
    var auxAli = (salInic / 100) * 15;
    break;
}

var salFin = salInic + auxAli;

// -Imprima como saída o:
//  código,
//  número de horas trabalhadas,
//  valor da hora trabalhada,
//  salário inicial,
//  auxílio alimentação e
//  salário final (salário inicial + auxílio-alimentação).
document.write(`Folha de pagamento do funcionário:
<br>Código do Funcionário: ${funCod}
<br>Número de horas trabalhadas: ${hrsMes}
<br>Valor da hora trabalhada: ${valorHora}
<br>Salário inicial: ${salInic}
<br>Auxílio alimentação: ${auxAli}
<br>Salário final: ${salFin}`);
