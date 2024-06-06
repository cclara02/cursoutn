function allparrafo() {
    const all = document.getElementsByTagName('p');
    console.log(all);

    const numero = all.length;
    console.log(numero);

    alert(`hay ${numero} elementos de p dentro de este documento`);
}

function caja1P() {
    const caja1 = document.getElementById('caja1');
    console.log(caja1); //caja con borde azul
    const caja1p = caja1.getElementsByTagName('p');
    console.log(caja1p);// las p que estan en la caja azul
    const numero = caja1p.length;
    console.log(numero);
    alert(`hay ${numero} elementos de p dentro de este documento`);
}

function caja2P() {
    const caja2 = document.getElementById('caja2');
    console.log(caja2); //caja con borde rojo
    const caja2p = caja2.getElementsByTagName('p');
    console.log(caja2p);// las p que estan en la caja rojo
    const numero = caja2p.length;
    console.log(numero);
    alert(`hay ${numero} elementos de p dentro de este documento`);
}

// caja1P();
// allparrafo();
caja2P();


