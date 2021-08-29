/*--Módulos--*/
/*--NodeJS--*/
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Oi, eu sou o node.js");
});

/*----*/

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});

/*----*/

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*--Colocando coisas em um módulo--*/

boasVindas = (nome) => {
  return `Bem-vindo aos módulos, ${nome}`;
};

opiniao = (oQueVoceAcha) => {
  return `Agora eu acho que usar módulos é ${oQueVoceAcha}`;
};

exports.atributoDoModulo = boasVindas;
exports.suaOpiniao = opiniao;

/*--Usando um módulo--*/

const meuModulo = require("modulo");

console.log(meuModulo.atributoDoModulo("Gerson"));
console.log(meuModulo.atributoDoModulo("Muito Legal"));

/*--Export--*/

let boasVindas = (nome) => {
  return `Bem-vindo aos módulos, ${nome}`;
};

export default boasVindas;

/*--Import--*/

import boasVindas from "modulo";

console.log(boasVindas("Novo programador"));

/*--Export + de 1--*/

let boasVindas = (nome) => {
  return `Bem-vindo aos módulos, ${nome}`;
};

let opiniao = (oQueVoceAchaDeModulos) => {
  return `Eu acho módulos ${oQueVoceAchaDeModulos}`;
};

export { boasVindas, opiniao };

/*--Import + de 1--*/

import { boasVindas, opiniao } from "modulo";

console.log(boasVindas("Novo programador"));

console.log(opiniao("Muito Top!"));
