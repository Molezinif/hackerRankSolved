function birthdayCakeCandles(candles) {
  candles.sort((a, b) => a - b)
  const higherCandle = candles[candles.length - 1]
  let countOfCandles = 0
  candles.find((candle) => {
    if (candle === higherCandle) {
      countOfCandles++
    }
  })

  return countOfCandles
}
function main() {
  const res = birthdayCakeCandles([3, 2, 1, 3])
  console.log(res)
}

main()
