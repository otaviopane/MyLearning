// /*LISTA DE EXERCÍCIOS 01 - Ex 06*/
// 6.Faça um script que receba uma data no formato
// “dd/mm/aaaa” e escreva a data por extenso.
// Dica: use a função “split” de uma string que quebra a string
// em pedaços dado um separador como argumento da função.
// Nesse caso, o separador é a barra (/) da data.

// Exemplo: Para a entrada “31/08/2012” deve ser escrito
// “31 de agosto de 2012”.

var data = prompt("Digite a data desejada: \ndd/mm/aaaa");
var dataExt = data.split("/");

var dia = dataExt[0];
var mes = parseInt(dataExt[1]);
var ano = dataExt[2];

if (mes == 01) {
  mesExt = "Janeiro";
} else if (mes == 02) {
  mesExt = "Fevereiro";
} else if (mes == 03) {
  mesExt = "Março";
} else if (mes == 04) {
  mesExt = "Abril";
} else if (mes == 05) {
  mesExt = "Maio";
} else if (mes == 06) {
  mesExt = "Junho";
} else if (mes == 07) {
  mesExt = "Julho";
} else if (mes == 08) {
  mesExt = "Agosto";
} else if (mes == 09) {
  mesExt = "Setembro";
} else if (mes == 10) {
  mesExt = "Outubro";
} else if (mes == 11) {
  mesExt = "Novembro";
} else {
  mesExt = "Dezembro";
}

document.write(`${dia} de ${mesExt} de ${ano}`);
