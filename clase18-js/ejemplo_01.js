const empleados =[
    {
        nombre:"Flavia",
        trabajo:"desarrollador"
    },
    {
        nombre:"Laura",
        trabajo:"abogado"
    },
    {
        nombre:"Daniela",
        trabajo:"maestra"
    },
    {
        nombre:"Cecilia",
        trabajo:"desarrollador"
    },
    {
        nombre:"Jere",
        trabajo:"maestra"
    },
    {
        nombre:"Leonel",
        trabajo:"veterinaria"
    }
]

const desarrollador = empleados.filter(empleado => empleado.trabajo =='desarrollador')
const no_desarrollador = empleados.filter(empleado => empleado.trabajo != 'desarrollador')

console.log(desarrollador);
console.log(no_desarrollador);