let array = ['java', 'javascript', 'python', 'html', 'css'];

let nDeCaracteres = []

for (let index = 0; index < array.length; index += 1) {
    nDeCaracteres.push(array[index].length);
}

let indexMaior = 0;
let indexMenor = 0;

for (let index = 1; index < nDeCaracteres.length; index += 1) {
    if(nDeCaracteres[index] > nDeCaracteres[indexMaior]) {
        indexMaior = index;
    }
    if(nDeCaracteres[index] < nDeCaracteres[indexMenor]) {
        indexMenor = index;
    }
}

console.log("A maior palavra é: " + array[indexMaior] + ". E a menor é: " + array[indexMenor]);
