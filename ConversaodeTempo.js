let N = parseInt(input);

let horas = Math.floor(N / 3600);
N = N % 3600;

let minutos = Math.floor(N / 60);
let segundos = N % 60;

console.log(`${horas}:${minutos}:${segundos}`);