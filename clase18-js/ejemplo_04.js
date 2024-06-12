let a,b,resto;
[a,b]=[10,20];

console.log(a);//me devuelve 10
console.log(b);//me devuelve 20

[a,b,...resto]=[10,20,30,40,50]
console.log(resto);// devuelve 30,40,50


const vocales =['a','e','i'];
console.log(vocales);//devuelve a e i 

const vocalesCompletas = [...vocales,'o','u'];
console.log(vocalesCompletas);//devuelve a e i o u
