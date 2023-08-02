'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function plusMinus(arr) {
  let n = arr.length;
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;

  for(let i = 0; i < n; i++) {
    // if arr[i] is positive increment countPositive
    if(arr[i] > 0) {
      countPositive += 1;
    }
    // if arr[i] is zero increment countZero
    if(arr[i] === 0) {
      countZero += 1;
    }
    // if arr[i] is negative increment countNegative
    if(arr[i] < 0) {
      countNegative += 1;
    }
  }
  // return the ratio of each count to n
  const positiveRatio = (countPositive / n).toFixed(6);
  const negativeRatio = (countNegative / n).toFixed(6);
  const zeroRatio = (countZero / n).toFixed(6);

  return `${positiveRatio}\n${negativeRatio}\n${zeroRatio}`;
}

function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = plusMinus(arr);
    console.log(res);
}
