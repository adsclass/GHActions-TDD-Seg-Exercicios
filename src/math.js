function fatorial(num) {
    let resultado = 1;

    if (typeof num == "string") {
        num = num - 0;
    }
    if (isNaN(num) || typeof num !== "number") {
        throw new TypeError("O argumento deve ser um número válido");
    }

    if (num < 0) {
        throw new Error("Não existe fatorial de número negativo");
    }

    if (num !== 0) {
        for (let i = num; i > 0; i--) {
            resultado = resultado * i;
        }
    } else {
        resultado = 1;
    }

    return resultado;
}
function fibonnacci(num) {
    
    // resultado = termo3

    let termo1 = 0;
    let termo2 = 1;
    let resultado;

    if (typeof num == "string") {
        num = num - 0;
    }
    if (isNaN(num) || typeof num !== "number") {
        throw new TypeError("O argumento deve ser um número válido");
    }

    if (num == 0 || num < 0) {
        throw new TypeError(
            "Não existe fibonnacci de número menor ou ingual a zero"
        );
    }


    for(let i = num; i > 1; i--){
        resultado = termo1 + termo2;
        termo1 = termo2;
        termo2 = resultado
    }

    return resultado;
}
function ehPrimo(num) {
    let resultado;
    

    if(typeof num == "string"){
        num = num - 0
    }

    if(isNaN(num) || typeof num !== "number"){
        throw new TypeError("O argumento deve ser um número válido");
    }

    if(num == 1 || num < 1){
        throw new TypeError("Não existe número primo de número menor ou igual a 1")
    }

    resultado = (num % 2 !== 0);


    return resultado;
}

module.exports = {
    fatorial,
    fibonnacci,
    ehPrimo,
};
