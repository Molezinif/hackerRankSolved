'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function diagonalDifference(arr) {
  let leftDiagonalSum = 0
  let rightDiagonalSum = 0
  const n = arr.length

  for (let i = 0; i < n; i++) {
    leftDiagonalSum += arr[i][i]
    rightDiagonalSum += arr[i][n - 1 - i]
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum)

  /*
    diagonal difference example
    1 2 3
    3 2 1
    1 2 3

    left to right example
    arr[0][9]
    arr[1][8]
    arr[2][7]
    arr[3][6]

    right to left example
    arr[0][0]
    arr[1][1]
    arr[2][2]
    */
}

function main() {
  rl.question('Enter the size of the square matrix (n): ', function (n) {
    let arr = Array(parseInt(n))

    console.log(
      'Enter the elements of the matrix row by row, separated by spaces:'
    )
    for (let i = 0; i < n; i++) {
      rl.question(`Row ${i + 1}: `, function (input) {
        arr[i] = input.split(' ').map((arrTemp) => parseInt(arrTemp, 10))

        if (i === n - 1) {
          // All rows have been entered, calculate the diagonal difference
          const result = diagonalDifference(arr)
          console.log('Diagonal Difference:', result)
          rl.close()
        }
      })
    }
  })
}

main()

// diagonal difference
