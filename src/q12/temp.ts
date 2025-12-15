const tempInput = process.argv[2];
const temperature = parseFloat(tempInput);

if (temperature > 30) {
    console.log('Hot');
} else {
    console.log('Normal');
}