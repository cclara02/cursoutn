const nombre = prompt('ingrese su nombre','');
const nota = parseInt(prompt('ingrese su nota',''));
//dato: las comillas invertidas son cuando le paso dato osea ${}, osea el texto es dinamico porque puede cambiar
//dato: NaN -----> NOT A NUMBER


if(Number.isNaN(nota)){
    document.write(`la nota ingresada no es validad`)
}else if (nota>=4) {
    document.write(`${nombre} estas aprobada/o con un ${nota}`);
}else{
    document.write(`${nombre} estas desaprobada/o con un ${nota}`);
}