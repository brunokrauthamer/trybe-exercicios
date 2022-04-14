console.log(document.querySelector('#elementoOndeVoceEsta'));
document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'texto do primeiroFilhoDoFilho';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);