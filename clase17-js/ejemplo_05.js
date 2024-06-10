const frutas = ['palta', 'sandia', 'bananas', 'manzana'];
const numeros = [3,8,2,9,31];



console.log(frutas);
console.log(frutas.sort());//ordenado de a-z

// ordenamiento al reves y otra forma de escribir el algoritmo

const frutasordenadasreves = frutas.sort().reverse();
console.log(frutasordenadasreves);//ordenado de z-a
// ----------------------------------------------------------------------------------------------
//esta mal este codigo por que solo lee los primeros digitos entonces is vos tenes 1,3, 32,12, te lo ordena 1 12 3 32.j
// console.log(numeros);
// console.log(numeros.sort());

// const numerosalreves = numeros.reverse();
// console.log(numerosalreves);

const numerosordenados = numeros.sort(function (a,b) {
    return a-b;
})

console.log(numerosordenados);
const numerosordenadosalreves = numeros.sort(function (a,b) {
    return b-a;
})
console.log(numerosordenadosalreves);


