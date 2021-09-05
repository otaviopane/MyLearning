/*LISTA DE EXERCICIOS 01*/
// 1. Crie uma aplicação para efetuar o cálculo do índice de massa corporal. Considere os seguintes critérios:
// 1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.

let nome = prompt("Digite o seu nome: ");
alert(`Olá ${nome}, tudo bem?`);

// 2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
let altura = prompt("Digite a sua altura (cm): ");
alert(`Olá ${nome}, sua altura é ${altura} cm.`);

// 3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
let peso = prompt("Digite o seu peso (kg)");
alert(`Olá ${nome}, seu peso é ${peso} kg`);

// 4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo float.
altura = parseFloat(altura);
peso = parseFloat(peso);
alert(altura + " - " + peso);
// 5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
let alturaM = altura / 100;
alert(`Olá ${nome}, sua altura é ${alturaM} m.`);

// 6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão: M =
// peso (quilos) ÷ altura²
let M = peso / alturaM ** 2;
alert(M);

// 7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando os
// critérios abaixo:
// a) Se M estiver abaixo de 16 : Baixo peso muito grave
if (M < 16) {
  alert(`IMC: ${M} - Baixo peso muito grave`);
}
// b) Se M estiver entre 16 e 16,99: Baixo peso grave
else if (16 <= M < 17) {
  alert(`IMC: ${M} - Baixo peso grave`);
}
// c) Se M estiver entre 17 e 18,49: Baixo peso
else if (17 <= M < 18.5) {
  alert(`IMC: ${M} - Baixo peso`);
}
// d) Se M estiver entre 18,50 e 24,99: Peso normal
else if (18.5 <= M < 25) {
  alert(`IMC: ${M} - Peso normal`);
}
// e) Se M estiver entre 25 e 29,99: Sobrepeso
else if (25 <= M < 30) {
  alert(`IMC: ${M} - Sobrepeso`);
}
// f) Se M estiver entre 30 e 34,99: Obesidade grau I
else if (30 <= M < 35) {
  alert(`IMC: ${M} - Obesidade grau I`);
}
// g) Se M estiver entre 35 e 39,99: Obesidade grau II
else if (35 <= M < 40) {
  alert(`IMC: ${M} - Obesidade grau II`);
}
// h) Se M for maior que 40: Obesidade grau III
else {
  alert(`IMC: ${M} - Obesidade grau III`);
}

// 8) Ao término o sistema deve fornecer a seguinte saída para o usuário:
// “<Nome> possui índice de massa corporal igual a <m> , sendo classificado como: .” *As informações em
// vermelho são variáveis e devem ser substituídas pelos seus respectivos valores calculadas dentro da
// aplicação.

// ----------------------------------------------------------------

// 2. Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário. Considere
// os seguintes critérios:
// Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”. Se a idade
// informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”. Se a idade informada for
// maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”. Se a idade informada for maior ou igual a
// 60, exibir a mensagem “Idoso”.
// Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário.
// Um aluno está encontrando dificuldades para entender como é composta a média final de determinada
// disciplina, a qual é composta pelas três notas seguintes:
