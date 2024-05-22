const num1 = parseInt(prompt('ingrese el primer numero',''));
const num2 = parseInt(prompt('ingrese el segundo numero',''));
const num3 = parseInt(prompt('ingrese el tercero numero',''));


console.log(num1,num2,num3);

if(num1>num2 && num1>num3){
    document.write(`el mayor es ${num1}`);
} else if(num2>num3){
    document.write(`el mayor es ${num2}`);
}else{
    document.write(`el mayor es ${num3}`);
}