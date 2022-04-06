const custo = 1000;
const preco = 1300;

let lucro = preco - 1.2*custo

if (custo < 0 || preco <0) {
    console.log("Erro");
}
else {
    console.log("O lucro é de " + lucro);
}
