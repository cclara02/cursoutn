const nombre = 'Clara';
const edad = 21;

console.log(`hola! ${nombre} asi que vos tenes ${edad}`);

const edad1 = 18;
const edad2 = 32;
const edad3 = parseInt(prompt(`ingrese una edad`, ''));

const mensaje1 = `La cuota para personas de ${edad1} es de ${edad1 >= 21 ? 5000 : 3500}`;
const mensaje2 = `La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 5000 : 3500}`;
const mensaje3 = `La cuota para personas de ${edad3} es de ${edad3 >= 21 ? 5000 : 3500}`;

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);

