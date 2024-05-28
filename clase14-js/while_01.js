let i =1;
const cuantos = 5;
let suma = 0;


while (i<=cuantos) {
    const valor = parseInt(prompt(`ingrese el valor ${i} de ${cuantos}`));
    suma += valor;
    i++;
}

document.write(`la suma de los valores es ${suma}`);