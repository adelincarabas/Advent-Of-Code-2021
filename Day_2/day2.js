var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day2.txt", "utf8");
  input = data;
} catch (e) {
  console.log("Error:", e.stack);
}

// console.log(input);

splitInputs = (inputExample) => {
  inputExample = inputExample.split(/\r?\n/);
  return inputExample;
};

// str = str.replace(/[^0-9]/g, "");

let calculation = splitInputs(input);
let forwardArray = [];
let downArray = [];
let upArray = [];
let aim = 0;
let depth = 0;
for (let i = 0; i < calculation.length; i++) {
  if (calculation[i].includes("forward")) {
    forwardArray.push(calculation[i].replace(/[^0-9]/g, ""));
    depth = depth + aim * Number(calculation[i].replace(/[^0-9]/g, ""));
  }
  if (calculation[i].includes("up")) {
    upArray.push(calculation[i].replace(/[^0-9]/g, ""));
    aim = aim - Number(calculation[i].replace(/[^0-9]/g, ""));
  }
  if (calculation[i].includes("down")) {
    downArray.push(calculation[i].replace(/[^0-9]/g, ""));
    aim = aim + Number(calculation[i].replace(/[^0-9]/g, ""));
  }
}

var numbersForwardArray = forwardArray.map(Number);
var numbersDownArray = downArray.map(Number);
var numbersUpArray = upArray.map(Number);

let totalForwardArray = 0;
for (let i = 0; i < numbersForwardArray.length; i++) {
  totalForwardArray = totalForwardArray + numbersForwardArray[i];
}

let totalDownArray = 0;
for (let i = 0; i < numbersDownArray.length; i++) {
  totalDownArray = totalDownArray + numbersDownArray[i];
}

let totalUpArray = 0;
for (let i = 0; i < numbersUpArray.length; i++) {
  totalUpArray = totalUpArray + numbersUpArray[i];
}

//PART ONE
let finalResult1 = totalForwardArray * (totalDownArray - totalUpArray);
console.log(finalResult1);

//PART TWO
let finalResult2 = depth * totalForwardArray;

console.log(finalResult2);
