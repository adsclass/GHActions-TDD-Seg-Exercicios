function fatorial(w) {
if (w < 0) return undefined;
if (w === 0) return 1;
for (let i = 1; i <= w; i++) {
  resultado *= i;
}
return resultado;
}


function fibonacci() {

}
function ehPrimo() {

}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}