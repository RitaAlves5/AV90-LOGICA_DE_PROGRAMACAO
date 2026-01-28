let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

const consumoMedio = (X/Y);

console.log(`${consumoMedio.toFixed(3)} km/l`);