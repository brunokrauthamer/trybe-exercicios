const a = 10;
const b = 10;
const c = 30;

if (a>b && a>c){
    console.log(a)
}
else if (b>a && b>c) {
    console.log(b)
}
else if (c>a && c>b) {
    console.log(c)
}
else {
    console.log("Não há um número que é isoladamente o maior dos três.")
}