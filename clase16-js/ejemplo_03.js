const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',function(e){  // submit es un evento de java script(hay muchos)
    e.preventDefault();
    if (e.currentTarget.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }
    if (e.currentTarget.mensaje.value == '') {
        alert('El campo mensaje es requerido');
        return;
    }

    alert(`gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente mensaje: ${e.currentTarget.mensaje.value}`);
})