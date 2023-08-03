function staircase(n) {
  let str = '';
  // this loop is i < (n * n) because n * n is the total of elements in the "matrix"
  for(let i = 0; i < (n * n); i++) {
    // rowSize and colSize are the size of the matrix
    let rowSize = n;
    let colSize = n;

    // actualRow and actualCol are the actual position of the element in the matrix
    let actualRow = Math.floor(i / rowSize);
    // if i & colSize is 0: indicates that we are on the next line of stairs.
    let actualCol = Math.floor(i % colSize);
    console.log('actualCol', actualCol, 'actualRow', actualRow)
    if (i < (n * n) - 1) {
      if (actualCol < n - actualRow - 1) {
        str += ' ';
      } else {
        str += '#';
      }
      if (actualCol === n - 1) {
        str += '\n';
      }
    } 
  }
  str += '#';
  return str;
}

/*
  logic example when n = 3
  log of the actualCol and actualRow in the loop:
  actualCol 0 actualRow 0
  actualCol 1 actualRow 0
  actualCol 2 actualRow 0
  actualCol 0 actualRow 1
  actualCol 1 actualRow 1
  actualCol 2 actualRow 1
  actualCol 0 actualRow 2
  actualCol 1 actualRow 2
  actualCol 2 actualRow 2

  output:
      #
     ##
    ###
*/

function main() {
    const res = staircase(100);
    console.log(res)
}

main();

// wiki: here i draw an draft of the problem im trying to solve
