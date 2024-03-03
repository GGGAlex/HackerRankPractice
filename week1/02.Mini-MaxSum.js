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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  const sortedArr = quickSort(arr);

  console.log(
    sortedArr
      .slice(0, sortedArr.length - 1)
      .reduce((sum, current) => sum + current, 0),
    sortedArr
      .slice(-(sortedArr.length - 1))
      .reduce((sum, current) => sum + current, 0)
  );
}

/**
 *  Quick Sort Algorithm
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  let left = [];
  let right = [];

  arr.forEach((num, index) => {
    if (index !== pivotIndex) {
      if (num < pivot) {
        left.push(num);
      } else {
        right.push(num);
      }
    }
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
