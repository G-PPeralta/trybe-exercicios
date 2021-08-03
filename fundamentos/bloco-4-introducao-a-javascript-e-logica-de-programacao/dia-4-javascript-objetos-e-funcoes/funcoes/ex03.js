function lowestValue (numbers) {
  let lowestNumber = Math.min.apply(null, numbers);
  for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] === lowestNumber) {
      let index = numbers.indexOf(lowestNumber)
      return index
    }
  } 
}

let numeros = [2, 4, 6, 7, 10, 0, -3]

console.log(lowestValue(numeros))


i = 0 = 2
i = 1 = 4
i = 2 = 6
i = 3 = 7
i = 4 = 10
i = 5 = 0
i = 6 = -3