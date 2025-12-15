const String = process.argv[2];
const At = '@';

if (String.includes('@')) {
    console.log('Has @');
} else {
    console.log('No @');
    process.exit(0);
}
