function leadingZero(n) {
  if (n < 10) {
    return `0${n}`
  }
  return n
}

function timeConversion(s) {
  const isPM = s.match('PM')

  const hour = Number(s.substr(0, 2))

  const minutes = Number(s.substr(3, 2))

  const seconds = Number(s.substr(6, 2))

  if (hour > 12 || minutes > 59 || seconds > 59) {
    return 'Nice try'
  }

  if (isPM?.length) {
    if (hour === 12) {
      return `12:${leadingZero(minutes)}:${leadingZero(seconds)}`
    }

    return `${leadingZero(hour + 12)}:${leadingZero(minutes)}:${leadingZero(
      seconds
    )}`
  }

  if (hour === 12) {
    return `00:${leadingZero(minutes)}:${leadingZero(seconds)}`
  }

  return s.replace('AM', '')
}

function main() {
  const res = timeConversion('07:05:45PM')
  console.log(res)
}

main()
