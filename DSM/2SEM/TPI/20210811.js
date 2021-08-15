/*--Objeto--*/

let numero = 10; //primitivo - number
let numero2 = numero; // copiando valor
numero2 = numero2 + 10;
console.log(numero2);

// Output: 20

/*---*/

let numero = 10; //primitivo - number
let numero2 = numero; // copiando valor
numero2 = numero2 + 10;
console.log(numero); //<---- numero

// Output: 10

/*---*/

let numero = { valor: 10 }; //objeto (valor de referencia)
let numero2 = numero; // copiando referencia
numero2.valor = numero2.valor + 10;
console.log(numero2.valor);

// Output: 20

/*---*/

let numero = { valor: 10 }; //objeto (valor de referencia)
let numero2 = numero; // copiando referencia
numero2.valor = numero2.valor + 10;
console.log(numero.valor); //<---- numero

// Output: 20

/*------*/

let pessoa = { nome: "Gerson", sobrenome: "Penha" }; // objeto

let trocarNome = (alguem) => {
  // isso é uma arrow function
  alguem.nome = "João";
};

trocarNome(pessoa);

console.log(pessoa.nome);

// Output: João

/*---*/

let pessoa = "Jorge"; //primitivo - string

let trocarNome2 = (x) => {
  // isso é uma arrow function
  x = "João";
};

trocarNome2(pessoa);

console.log(pessoa);

// Output: Jorge
// Não mudou pq a variável pessoa é primitiva string e não objeto

/*--Referencia--*/

const empresa = new Object();
empresa.nome = "Banco Nacional";
empresa.cnpj = "1254879654295";

const empresa2 = empresa;
empresa2["nome"] = "Banco Internacional";

console.log(empresa.nome);
console.log(empresa["nome"]);

/*---*/

let valorPrimitivo = 10;

function aumentarMaisDez(valor) {
  valor = valor + 10;
}

aumentarMaisDez(valorPrimitivo);

console.log("Este é o valor da variável: " + valorPrimitivo);

/*---*/

let valorReferencia = { valor: 10 };

function aumentarMaisDez(referencia) {
  referencia.valor = referencia.valor + 10;
}

aumentarMaisDez(valorReferencia);

console.log("Este é o valor da variável: " + valorReferencia.valor);

/*--Método Call()--*/

let detalhador = {
  detalhar: function () {
    return this.nome + " " + this.sobrenome;
  },
};

let pessoa = {
  nome: "Gerson",
  sobrenome: "Penha",
  telefone: {
    ddd: "12",
    numero: "999999999",
  },
};

console.log(detalhador.detalhar.call(pessoa));

/*---*/

const detalhador = {
  detalhar: function () {
    return (
      "\n Nome Fantasia: " +
      this.nome +
      "\n" +
      " Razão Social: " +
      this.razaoSocial
    );
  },
};

let empresa = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };

console.log(
  "Quais os detalhes da empresa: " + detalhador.detalhar.call(empresa)
);

/*---*/

const detalhador = {
  detalhar: function (cidade, estado) {
    return (
      "\n Nome Fantasia: " +
      this.nome +
      "\n" +
      " Razão Social: " +
      this.razaoSocial +
      "\n---\n" +
      "cidade: " +
      cidade +
      "\nestado: " +
      estado
    );
  },
};

let empresa = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };

console.log(
  "Quais os detalhes da empresa: " +
    detalhador.detalhar.call(empresa, "São José", "SP")
);

/*--Método Apply()--*/

const detalhador = {
  detalhar: function (cidade, estado) {
    return (
      "\n Nome Fantasia: " +
      this.nome +
      "\n Razão Social: " +
      this.razaoSocial +
      "\n ---" +
      "\n Cidade: " +
      cidade +
      "\n Estado: " +
      estado
    );
  },
};

let empresa = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };

console.log(
  " Quais os detalhes da empresa: " +
    detalhador.detalhar.apply(empresa, ["São José", "SP"])
);

/*--Adc propriedades--*/

const empresa = {
  nome: "Mercado Online",
};

empresa.razaoSocial = "ABC LTDA";

console.log("Qual o nome da empresa: " + empresa.razaoSocial);

/*---*/

const empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  telefone: {
    ddd: "12",
    numero: "999999999",
  },
};

console.log(
  "Telefone da empresa: " + empresa.telefone.ddd + " " + empresa.telefone.numero
);

/*---*/

const empresa = new Object();
empresa.nome = "Banco Nacional";
empresa.cnpj = "12548569325478";

for (let propriedade in empresa) {
  console.log(propriedade);
}

/*---*/

let empresa = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };

let dados = Object.values(empresa);

console.log(dados);

/*---*/

const empresa = new Object();
empresa.nome = "Banco Nacional";
empresa.cnpj = "12548569325478";
empresa.endereco = "Av. Brasil, nº 541, Rio de Janeiro";

delete empresa.endereco;
console.log(empresa.endereco);

/*--Métodos--*/

let empresa = { nome: "Mercado Online", razaoSocial: "ABC LTDA" };

empresa.detalhe = function () {
  return this.nome + "\n" + this.razaoSocial;
};

console.log("Qual o nome da empresa: \n" + empresa.detalhe());

/*--Métodos de acesso--*/
/*--Get--*/

let empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  get pegarNome() {
    return this.nome;
  },
};
console.log("Qual o nome da empresa: " + empresa.pegarNome);

/*--Set--*/

let empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  set colocarNome(novoNome) {
    this.nome = novoNome;
  },
};

empresa.colocarNome = "Mercado Offline";

console.log("Qual o nome da empresa: " + empresa.nome);

/*--Qualidade dos dados--*/

let empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  get pegarNome() {
    return this.nome.toUpperCase();
  },
};
console.log("Qual o nome da empresa: " + empresa.pegarNome);

/*---*/

const empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  get descricao() {
    return "Nome: " + this.nome + "\nRazão Social: " + this.razaoSocial;
  },
};

empresa.descricao = "Tentando modificar o método get!";

console.log("Descrição:\n" + empresa.descricao);

/*--Add Getters e Setters--*/

let empresa = {
  nome: "Mercado Online",
  razaoSocial: "ABC LTDA",
  set colocarNome(novoNome) {
    this.nome = novoNome;
  },
};

Object.defineProperty(empresa, "pegarNome", {
  get: function () {
    return this.nome;
  },
});

console.log("Qual o nome da empresa: " + empresa.pegarNome);

/*--Função construtora--*/

function Empresa(nome, razaoSocial) {
  this.nome = nome;
  this.razaoSocial = razaoSocial;
}

let empresa = new Empresa("Mercado Online", "ABC LTDA");
