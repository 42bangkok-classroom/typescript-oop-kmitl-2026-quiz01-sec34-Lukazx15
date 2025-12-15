const even = process.argv[2];
const N = Number(even);

if (isNaN(N)) {
    process.exit(0);
}

for (let i = 0; i <= N; i += 2) {
    console.log(i);
    break;
}   