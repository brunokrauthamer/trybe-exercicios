let lista = [];
for (let num=1; num<=25; num += 1) {
    lista.push(num);
}

console.log(lista);


for (num of lista) {
    console.log(num/2);
}
