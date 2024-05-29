function validarForm() {
    const nombreValido = true;
    const passWordValido = validarLargo(document.form.text1.value, 5); //document.form.text1.value ESTO ES EL IMPUT

    const resultado = nombreValido && passWordValido;
    if (resultado){
        alert('ES VALIDO');
    }else{
        alert('NOOO ES VALIDO');
    }
}


function validarLargo(texto, LargoRequerido) {
    return texto.length >= LargoRequerido;
}