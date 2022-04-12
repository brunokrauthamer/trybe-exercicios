function romanConversor (romanNumber) {
    let romanToNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let num = 0;
    for (let index = 0; index <= romanNumber.length - 1; index += 1) {
        if (romanToNum[romanNumber[index]] < romanToNum[romanNumber[index + 1]]) {
            num += romanToNum[romanNumber[index + 1]] - romanToNum[romanNumber[index]];
            index += 1;
        }
        else {
            num += romanToNum[romanNumber[index]];
        }
    }
    return num;
}

// console.log(romanConversor("MCCCLXIV"));

function arrayOfNumbers (vector) {
    let evenNumArray = [];       
    for (let list of vector) {
        for (let num of list) {
            if (num % 2 === 0) {
                evenNumArray.push(num);
            }
        }
    }
    return evenNumArray;
}

// console.log (arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

// function arrayToObj(basket) {
//     let fruitObject = {};
//     for (let fruit of basket) {
//         if (typeof(fruitObject[fruit]) == undefined){
//             fruitObject[fruit] = 1;
//         }
//         else {
//             fruitObject[fruit] += 1;
//         }
//     }
//     return fruitObject;
// }



// console.log(arrayToObj([
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ]))

  let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ]

    let fruitObject = {};
    for (let fruit of basket) {
        if (fruitObject[fruit] == undefined){
            fruitObject[fruit] = 1;
        }
        else {
            fruitObject[fruit] += 1;
        }
    }

    console.log(fruitObject);
