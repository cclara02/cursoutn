const items = document.getElementsByClassName('item');

function cambiarVisibilidad() {
    const item = items[3];

    if (item.style.visibility == '') {
        item.style.visibility = 'hidden';
    }else{
        item.style.visibility = '';
    }
}

setInterval(cambiarVisibilidad,200);
// 500 es medio segundo
//prenbde y apaga el item en 2 segundos