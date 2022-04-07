let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count_odd = 0

for (number of numbers) {
    if (number%2===1){
        count_odd += 1
    }
}

if (count_odd===0) {
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(count_odd)
}
