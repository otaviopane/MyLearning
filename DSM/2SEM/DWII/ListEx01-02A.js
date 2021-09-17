/*LISTA DE EXERCÍCIOS 01 - Ex 02 A*/
// 2. Crie uma aplicação capaz de identificar a faixa etária com base na idade
// informada pelo usuário.
let idade = prompt("Digite sua idade: ");
idade = parseInt(idade);

// Considere os seguintes critérios:
// Se a idade informada for maior ou igual a 0 e menor que 15,
// exibir a mensagem “Criança”.
if (idade < 15) {
  var faixa = "Criança";
}
// Se a idade informada for maior ou igual a 15 e menor que 30,
// exibir a mensagem “Jovem”.
else if (15 <= idade && idade < 30) {
  var faixa = "Jovem";
}
// Se a idade informada for maior ou igual a 30 e menor que 60,
// exibir a mensagem “Adulto”.
else if (30 <= idade && idade < 60) {
  var faixa = "Adulto";
}
// Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
else {
  var faixa = "Idoso";
}

alert(`Olá! Sua idade é ${idade}, logo você é um ${faixa}!`);
// Fique à vontade para utilizar qualquer uma das funções aprendidas
// para exibição de dados para o usuário.
