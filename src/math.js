function fatorial(w) {
if (w < 0) return undefined;
if (w === 0) return 1;
for (let i = 1; i <= w; i++) {
  resultado *= i;
}
return resultado;
}


function fibonacci(w) {
if (w < 0) return undefined; 
const sequencia = [0,1];
for (let i =2; i <= navigator; i++){
  sequencia[i] = sequencia[i -1] + sequencia[i -2];
}
return sequencia.slice(0, w + 1);
}
function ehPrimo() {

}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}