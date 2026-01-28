let x = parseInt(input);

if (x % 2 === 0) {
  x++;
}

for (let i = 0; i < 6; i++) {
  console.log(x);
  x += 2;
}