// let now = new Date();
// alert(now); //muestra en pantalla la fecha y la hora actual

// var dia = new Date();
// var hours = dia.getHours();

// console.log(hours);

const nombre = prompt('Escribir tu nombre', '');
const today = new Date();
const hrs = today.getHours();

if (hrs < 12) {
    document.write('buenos dias' + nombre);
    // console.log(`buenos dias ${nombre}`); otra forma de escribir
} else if (hrs >= 12 && hrs <= 19) {
    document.write('buenas tardes' + nombre);

} else {
    document.write('buenas noches' + nombre)

}
