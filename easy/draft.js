function miniMaxSum(n) {
  let sum = 0
  const max = n.splice(n.length - 1, n.length)
  for (let i = 0; i < n.length; i++) {
    sum += n[i]
    if (i === n.length - 1) {
      const minSum = sum
      const maxSum = sum + max[0]
      return {
        minSum,
        maxSum,
      }
    }
  }
}

function main() {
  const res = miniMaxSum([1, 2, 3, 4])
  console.log(res)
}

main()

// wiki: here i draw an draft of the problem im trying to solve
