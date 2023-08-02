function staircase(n) {
  let str = '';
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(i + j >= n - 1) {
        str += '#';
      } else {
        str += ' ';
      }
    }
  }
  return str
}

function main() {
    const res = staircase(6);
    console.log(res);
}

main();

// wiki: here i draw an draft of the problem im trying to solve
