var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day1.txt", "utf8");
  input = data;
} catch (e) {
  console.log("Error:", e.stack);
}

//PART ONE
sonarSweep = (inputExample) => {
  inputExample = inputExample.split(/\r?\n/);
  return inputExample;
};

var arrayOfNumbers = sonarSweep(input).map(Number);

console.log(arrayOfNumbers);

let depthMeasurement = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < arrayOfNumbers[i + 1]) {
    depthMeasurement++;
  }
}

console.log(depthMeasurement);

//PART TWO

4;

let newDepthMeasurement = 0;
for (let i = 0; i < arrayOfNumbers.length - 3; i++) {
  let number1 =
    arrayOfNumbers[i] + arrayOfNumbers[i + 1] + arrayOfNumbers[i + 2];
  let number2 =
    arrayOfNumbers[i + 1] + arrayOfNumbers[i + 2] + arrayOfNumbers[i + 3];
  if (number1 < number2) {
    newDepthMeasurement++;
  }
}

console.log(newDepthMeasurement);
