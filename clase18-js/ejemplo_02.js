function getNameDias(mes){

    //NaN --> not a  number
    //si no es un numero da falso
    if(Number.isNaN(mes)){
        return false;
    }
    //si es menor a 1 y mayor a 12 -->mes invalido
    if (mes<1 || mes>12) {
        return false;
    }
    mes--; // ejemplo: 12 -------- 12-1= posic 11 (diciembre)

    const data =[
        {   nombre:"Enero",
            dias:31
        },
        {   nombre:"Febrero",
            dias:28
        },
        {   nombre:"Marzo",
            dias:31
        },
        {   nombre:"Abril",
            dias:30
        },
        {   nombre:"Mayo",
            dias:31
        },
        {   nombre:"Junio",
            dias:30
        },
        {   nombre:"julio",
            dias:31
        },
        {   nombre:"Agosto",
            dias:31
        },
        {   nombre:"Septiembre",
            dias:30
        },
        {   nombre:"Octubre",
            dias:31
        },
        {   nombre:"Nomviembre",
            dias:30
        },
        {   nombre:"Diciembre",
            dias:31
        },
    ]

    return data[mes];
}



const numMes = parseInt(prompt('ingrese el mes del año en numeros'));
const resultado = getNameDias(numMes);

if (resultado) {
    alert(`el mes ${resultado.nombre}, tiene ${resultado.dias}dias.`);
}else{
    alert(`mes invalido`);
}