/*LISTA DE EXERCÍCIOS 01 - Ex 02 B*/
// Um aluno está encontrando dificuldades para entender como é composta a média final
// de determinada disciplina, a qual é composta pelas três notas seguintes:
let atiLab = prompt("Nota de 'Atividade prática em laboratório: '");
let provaSem = prompt("Nota de 'Prova do semestre: '");
let trabTeo = prompt("Nota de 'Trabalho teórico: '");

let mediaPond = (atiLab * 2 + provaSem * 5 + trabTeo * 3) / (2 + 5 + 3);
mediaPond = mediaPond.toFixed(2);

// Considere os seguintes critérios:
// Se acima de 9 a 10, A.
if (mediaPond > 9) {
  var faixa = "A";
}
// Se acima de 8 a 9, B.
else if (8 < mediaPond && mediaPond <= 9) {
  var faixa = "B";
}
// Se acima de 7 a 8, C.
else if (7 < mediaPond && mediaPond <= 8) {
  var faixa = "C";
}
// Se acima de 6 a 7, D.
else if (6 < mediaPond && mediaPond <= 7) {
  var faixa = "D";
}
// Se acima de 5 a 6, E.
else if (5 < mediaPond && mediaPond <= 6) {
  var faixa = "E";
}
// Se 0 a 5, F.
else {
  var faixa = "F";
}

document.write(
  `A média do aluno é = ${mediaPond} e a sua classificação é ${faixa}`
);
