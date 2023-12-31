function getNextMultipleOf5(num) {
  let nextMultipleOf5 = num
  while (nextMultipleOf5 % 5 !== 0) {
    nextMultipleOf5++
  }
  return nextMultipleOf5
}


function gradingStudents(grades) {
  const result = []
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i]
    const nextMultipleOf5 = getNextMultipleOf5(grade)
    const diff = nextMultipleOf5 - grade
    if (diff < 3 && grade >= 38) {
      result.push(nextMultipleOf5)
    }
    else {
      result.push(grade)
    }
  }

  return result
}
function main() {
  const res = gradingStudents([73, 67, 38, 33])
  console.log(res)
}

main()
