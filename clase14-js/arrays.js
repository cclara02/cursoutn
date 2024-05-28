const frutas = ['manzana','bananas', 'palta', 'pera'];

console.log(frutas);
document.write(frutas);
// objetivo que imprima tenemos manzana, tenemos bananas.....
//para recorre el array usamos un for

for(let i=0; i<frutas.length; i++){
    console.log('tenemos ' + frutas[i]);
    document.write('tenemos ' + frutas[i] + "<br/>");
}
