let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersNew = []

for(let index = 0; index < numbers.length; index += 1) {
    numbersNew.push(numbers[index]);
}

console.log(numbersNew);

for(let index1 = 0; index1 < numbers.length-1; index1 += 1) {
    for(let index = 0; index < numbers.length-1; index += 1) {
        if (numbers[index] > numbers[index+1]) {
            let maior = numbers[index];
            numbers[index] = numbers[index+1];
            numbers[index+1] = maior;
        }
    }
}
console.log(numbers);

let numbersDescending = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index1 = 0; index1 < numbersDescending.length-1; index1 += 1) {
    for(let index = 0; index < numbersDescending.length-1; index += 1) {
        if (numbersDescending[index] < numbersDescending[index+1]) {
            let menor = numbersDescending[index];
            numbersDescending[index] = numbersDescending[index+1];
            numbersDescending[index+1] = menor;
        }
    }
}

console.log(numbersDescending);



for(let index = 0; index < numbers.length; index += 1) {
    numbersNew.push(numbers[index]);
}

