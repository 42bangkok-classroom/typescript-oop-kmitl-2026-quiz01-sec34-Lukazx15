const word = process.argv[2];
let reversed = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}