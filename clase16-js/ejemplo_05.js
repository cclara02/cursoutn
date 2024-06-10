const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('activo');    
})



// classList representa una lista de clase asignadas a un elemento en este caso: alternar y activo. activo esta declarado en el css
// toggle: nos permite "prender" 0 "apagar" una clase del objeto. cambio
// porque usamos la e?? porque voy apretar el boton y el boton va a tener el cambio, no un parrafo o texto o cuadrado