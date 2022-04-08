let fruits = [3, 4, 10, 1, 12];
let sum = fruits[0];

for (let index = 1; index < fruits.length; index +=1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum);
}
else {
    console.log("valor menor que 16");
}
