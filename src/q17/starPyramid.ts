const pattern = Number(process.argv[2]);

for (let i = 0; i < pattern; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
