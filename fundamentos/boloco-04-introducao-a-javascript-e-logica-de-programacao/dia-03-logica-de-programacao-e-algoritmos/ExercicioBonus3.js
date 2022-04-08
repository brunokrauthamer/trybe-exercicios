const n = 10;
for (let index1 = 1; index1 <= n; index1 += 1) {
    let string = '';
    for (let index2 = 1; index2 <= 10 - index1; index2 += 1) {
        string += ' ';
    }
    for (let index3 = 1; index3 <= index1; index3+=1) {
        string += '*';
    }
    console.log(string);
}
