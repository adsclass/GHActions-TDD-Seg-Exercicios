function fatorial(num) {
    if (typeof num == "string") {
        num = num - 0;
    }
    if (isNaN(num) || typeof num !== "number") {
        throw new TypeError("O argumento deve ser um número válido");
    }

    if (num < 0) {
        throw new Error("Não existe fatorial de número negativo");
    }

    let resultado = 1;

    if (num != 0) {
        for (let i = 2; i <= num; i++) {
            resultado = resultado * i;
        }
    } else {
        resultado = 1;
    }

    return resultado;
}
function fibonacci() {}
function ehPrimo() {}

module.exports = {
    fatorial,
    fibonacci,
    ehPrimo,
};
