function processData(input) {
  //Enter your code here
  const lineArr = input.split("\r\n");
  lineArr.forEach((line) => dealLine(line));
}

function dealLine(line) {
  const inputArr = line.split(";");
  const isSplit = inputArr[0] === "S";
  const isClass = inputArr[1] === "C";
  const isMethod = inputArr[1] === "M";

  let res;

  res = isSplit ? splitWords(inputArr[2]) : combineWords(inputArr[2], isClass);

  console.log(isMethod && !isSplit ? res + "()" : res);
}

function splitWords(s) {
  const wordsArr = s.match(/[A-z][a-z]*/g);

  return wordsArr.join(" ").toLowerCase();
}

function combineWords(s, isClass) {
  const sArr = s.split(" ");

  return sArr
    .map((w, index) => {
      if (index === 0 && !isClass) {
        return w;
      } else {
        return `${w[0].toUpperCase()}${w.slice(1)}`;
      }
    })
    .join("");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
