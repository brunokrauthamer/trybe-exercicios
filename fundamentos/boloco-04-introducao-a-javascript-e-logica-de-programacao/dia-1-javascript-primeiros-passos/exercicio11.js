const salario = 3000;
let salario_liq_inss = null;
let salario_liq = null;
if (salario > 5189.82) {
    salario_liq_inss = salario - 570.88;
}
else if (salario >= 2594.93) {
    salario_liq_inss = salario * (1 - 0.11);
}
else if (salario >= 1556.95) {
    salario_liq_inss = salario * (1 - 0.09);
}
else {
    salario_liq_inss = salario * (1- 0.08);
}

if (salario_liq_inss <= 1903.98) {
    salario_liq = salario_liq_inss;
}
else if (salario_liq_inss <= 2826.65) {
    salario_liq = salario_liq_inss * (1 - 0.075) + 142.80;
}
else if (salario_liq_inss <= 3751.05) {
    salario_liq = salario_liq_inss * (1 - 0.15) + 354.80;
}
else if (salario_liq_inss <= 4664.68) {
    salario_liq = salario_liq_inss * (1 - 0.225) + 636.13;
}
else {
    salario_liq = salario_liq_inss * (1 - 0.275) + 869.36;
}

console.log(salario_liq)