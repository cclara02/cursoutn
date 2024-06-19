const nombre = prompt('ingrese su nomnre','');
const edad = parseInt(prompt('ingrese su edad',''));

if (Number.isNaN(edad)) {
    console.log('debes ingresar un numero');
}else if (edad > 18){
    console.log(`${nombre}, que tiene edad ${edad} puedes conducir`);
}else{
    console.log(`${nombre}, al tener ${edad} años NO puedes conducir`);
}