const items = document.getElementsByClassName('item');
console.log(items);

function cambiarVisibilidad(numItem){
    const item = items[numItem];
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden';
    }else{
        item.style.visibility = '';
    }
}

function cambiarDisplay(numItem){
    const item = items[numItem];
    if (item.style.display == '') {
        item.style.display = 'none';
    }else{
        item.style.display = '';
    }
}

// ver el codigo del acordeonn , en code free camp


