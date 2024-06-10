const link = document.getElementById('link');

link.addEventListener('click', function(e){
    e.preventDefault();  // frena el funcionamiento directo y te pregunta si queres ir a ese link
    alert('quisiste ir a: ' + e.currentTarget.href);
})