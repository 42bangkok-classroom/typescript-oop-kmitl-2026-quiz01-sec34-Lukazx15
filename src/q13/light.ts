const color = process.argv[2];

if (color === undefined) {
  console.log("Unknown");
  process.exit(0);
}

const input = color.toLowerCase();

switch (input) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown");
}
