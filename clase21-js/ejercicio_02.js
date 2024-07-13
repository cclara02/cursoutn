const numeros = [100,25,1250,8,16];
console.log(numeros);
let max = 0;


for(let i=0;i<numeros.length;i++){
    if (numeros[i] > max) {
        max=numeros[i];
    }
}

console.log(`el numero mayor de los siguientes numeros: ${numeros} es ${max}`);
