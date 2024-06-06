const items = document.getElementsByClassName('item');
console.log(items);

for (let i = 0; i < items.length; i++) {
    items[i].style= 'color:blue; padding-left:' + (10*i) + 'px';
    // que es lo que hace esto , al primer elemento= azul+ 10*0 px. segundo elemento: azul + 10*1 px; tercer elemento = azul + 10*3 px .y asi sucesivamente osea va aumentar el paddding a medidad que aumente la posicion.
}
