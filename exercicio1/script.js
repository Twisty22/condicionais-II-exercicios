let numero = prompt("Digite um numero")
//**a)** Utilizando ifs aninhados
if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("O número é divisivel por 2 e 3")
    }
    else{
        console.log("O número é divisivel por 2")
    }
}
else if(numero % 3 === 0){
    console.log("O número é divisivel por 3")
}
else{
    console.log("O número nao é divisivel por 2 nem 3")
}
//**b)** Utilizando um operador lógico para unir duas operações relacionais
if(numero % 2 === 0 || numero % 3 === 0){
    console.log("O número é divisivel por 2 ou 3")
}