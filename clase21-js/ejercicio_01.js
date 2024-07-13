const nombre = prompt('ingrese su nombre','');

const metros = parseInt(prompt('ingrese su distancia',''));

console.log(nombre,metros)//para checkear los datos que pusieron

if(metros>0 && metros<=1000){
    alert(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a pie`);
}else if(metros>1000 && metros<=10000){
    alert(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a bici`);
}else if(metros>10000 && metros<=30000){
    alert(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a colectivo`);
}else if(metros>30000 && metros<=100000){
    alert(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a en auto`);
}else{
    alert(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a en avion`);
}