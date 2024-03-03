"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(n, arr) {
  // Write your code here
  let [positiveNums, zeroNums, negativeNums] = [0, 0, 0];
  arr.forEach((num) => {
    if (num > 0) {
      positiveNums += 1;
    } else if (num === 0) {
      zeroNums += 1;
    } else {
      negativeNums += 1;
    }
  });
  console.log(Number(positiveNums / n).toFixed(6));
  console.log(Number(negativeNums / n).toFixed(6));
  console.log(Number(zeroNums / n).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(n, arr);
}
