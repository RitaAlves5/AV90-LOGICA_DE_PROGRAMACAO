var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let valoresOriginais = lines.map(num => parseInt(num));

let valoresOrdenados = [...valoresOriginais];

valoresOrdenados.sort((a, b) => a - b);

valoresOrdenados.forEach(valor => console.log(valor));

console.log("");

valoresOriginais.forEach(valor => console.log(valor));