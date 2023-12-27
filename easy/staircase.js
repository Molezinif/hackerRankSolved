function staircase(n) {
  let str = ''
  for (let i = 0; i < n * n; i++) {
    let rowSize = n
    let colSize = n

    let actualRow = Math.floor(i / rowSize)
    let actualCol = Math.floor(i % colSize)
    if (i < n * n - 1) {
      if (actualCol < n - actualRow - 1) {
        str += ' '
      } else {
        str += '#'
      }
      if (actualCol === n - 1) {
        str += '\n'
      }
    }
  }
  str += '#'
  return str
}

function main() {
  const res = staircase(20)
  console.log(res)
}

main()

// stair case
