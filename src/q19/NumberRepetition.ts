const size = Number(process.argv[2]);

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    row += i;
  }
  console.log(row);
}