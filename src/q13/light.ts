const color = process.argv[2];

if (!color) {
  console.log("Please provide a color.");
  process.exit(1);
}

const colorInput = color.toLowerCase();

switch (colorInput){
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