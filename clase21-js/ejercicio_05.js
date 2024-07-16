const alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
},
{
    nombre: 'Pedro Rodriguez',
    nota: 4
},   
{
    nombre: 'Roxana Garcia',
    nota: 8
},
{
    nombre: 'Luciano Lopez',
    nota: 5
},
{
    nombre: 'Florencia Martinez',
    nota: 10
},
{
    nombre: 'Raul Sanchez',
    nota: 7
},
{
    nombre: 'Sandra Figueroa',
    nota: 8
}

];

console.log(alumnos);

const aprobados = alumnos.filter(function(alumno) {
    return alumno.nota >= 7;
})

console.log(aprobados);

