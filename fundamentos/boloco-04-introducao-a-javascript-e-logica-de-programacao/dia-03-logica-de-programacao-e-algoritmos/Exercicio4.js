
let maiorPrimo = null

for (let number = 50; number >=1; number -= 1) {
    let primo = true;
    for (let divisor = Math.floor(number/2); divisor >= 2; divisor -= 1) {
        if (number % divisor === 0) {
            primo = false;
            break;
        }

    }
    if(primo===true) {
        maiorPrimo = number;
        break;
    }
}

if (maiorPrimo === null){
    console.log("Não há primo entre 0 e 50");
}
else {
    console.log("O maior primo entre 0 e 50 é: " + maiorPrimo);
}
