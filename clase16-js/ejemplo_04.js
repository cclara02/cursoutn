const parrafo = document.getElementById('parrafo');
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');


menos.addEventListener('click', function (){
    parrafo.style.fontSize = '10px';    
})

mas.addEventListener('click', function (){
    parrafo.style.fontSize = '30px';    
})


// porque no uso la e como parametro de la fuction??? ya le marco el elemento que quiero modificar
// porquer fontSize esta todo junto y no separado como css?? poruqe le estoy asignando, en cambio si igualo