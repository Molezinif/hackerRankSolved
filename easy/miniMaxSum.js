function miniMaxSum(n) {
  let sum = 0
  let max = 0
  let min = 0
  for (let i = 0; i < n.length; i++) {
    sum += n[i]
    if (n[i] > max) {
      max = n[i]
    }

    if (n[i] < min || min === 0) {
      min = n[i]
    }

    if (i === n.length - 1) {
      const miniSum = sum - max
      const maxSum = sum - min
      return `${miniSum} ${maxSum}`
    }
  }
}

function main() {
  const res = miniMaxSum([7, 69, 2, 221, 8974])
  console.log(res)
}

main()

// wiki: miniMaxSum
