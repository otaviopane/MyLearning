import Produto from "./produto";
let produto = new Produto();
produto.peso = 100;
let produto_2 = produto;
produto_2.peso = produto_2.peso + 50;
function algo(produto) {
}
console.log(produto_2.peso);
