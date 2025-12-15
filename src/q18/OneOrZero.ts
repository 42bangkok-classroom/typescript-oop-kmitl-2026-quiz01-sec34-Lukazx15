const size1 = Number(process.argv[2]);

for (let i = 0; i < size1; i++) {
  let row = "";
  const char = i % 2 === 0 ? "1" : "0";
  for (let j = 0; j < size1; j++) {
    row += char;
  }
  console.log(row);
}