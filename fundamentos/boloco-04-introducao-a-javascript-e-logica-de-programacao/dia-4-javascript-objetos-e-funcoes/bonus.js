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

console.log(romanConversor("MCCCLXIV"));


