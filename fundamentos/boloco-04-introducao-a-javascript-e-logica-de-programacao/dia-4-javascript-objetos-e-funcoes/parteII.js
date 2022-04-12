function verifyPalindrome (string1) {
    let reverseString = "";
    for (let index = string1.length - 1; index >=0; index -= 1) {
        reverseString += string1[index];
    }
    if (string1 === reverseString) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(verifyPalindrome('arara'), verifyPalindrome('asdsadsad'));

function maxValueIndex (array1) {
    let maxValue = array1[0];
    let maxIndex = 0;
    for (let index = 1; index <= array1.length - 1; index += 1) {
        if (array1[index] > maxValue) {
            maxValue = array1[index];
            maxIndex = index;
        }
    }
    return maxIndex;
}

// console.log(maxValueIndex([2, 3, 6, 7, 10, 1]));

function minValueIndex (array1) {
    let minValue = array1[0];
    let minIndex = 0;
    for (let index = 1; index <= array1.length - 1; index += 1) {
        if (array1[index] < minValue) {
            minValue = array1[index];
            minIndex = index;
        }
    }
    return minIndex
}

// console.log(minValueIndex([2, 4, 6, 7, 10, 0, -3]));

function biggestName (namesArray) {
    let biggest = namesArray[0];
    for (index = 1; index <= namesArray.length - 1; index += 1) {
        if (namesArray[index].length > biggest.length) {
            biggest = namesArray[index];
        }
    }
    return biggest
}

// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostRepeat (numArray) {
    let numOfReps = 0
    let mostRepeatNum = null;
    for (currentNumber of numArray) {
        let countRepeats = 0;
        for (number of numArray) {
            if (number === currentNumber) {
                countRepeats += 1;
            }
        }
        if (countRepeats > numOfReps) {
            numOfReps = countRepeats;
            mostRepeatNum = currentNumber;
        }
    }
   return mostRepeatNum ;
}


// console.log(mostRepeat([2, 3, 3, 3, 8, 2, 3]));

function sumOfNumbers (number) {
    return (number+1)*number/2;
}

function sumOfNumbers2 (number, sum=0) {
    if (number === 0) {
        return sum;
    }
    else {
        sum += number;
        return sumOfNumbers2(number-1, sum);
    }
}

function sumOfNumbers3 (number) {
    let sum = 0;
    for (let initNum = 1; initNum <= number; initNum += 1) {
        sum += initNum
    }
    return sum;
}

// console.log(sumOfNumbers3(5));

function verifyEnding (stringWord, stringEnding) {
    let sizeEnding = stringEnding.length;
    let sizeWord = stringWord.length;
    let difOfSize = sizeWord - sizeEnding;
    let equalEnding = true;
    for (index = 0; index <= sizeWord - 1; index += 1) {
        if (stringEnding[index] !== stringWord[difOfSize+index]) {
            equalEnding = false;
            break;
        }
    }
    return equalEnding;
}

// console.log(verifyEnding('abcdefg', 'efgh'));

