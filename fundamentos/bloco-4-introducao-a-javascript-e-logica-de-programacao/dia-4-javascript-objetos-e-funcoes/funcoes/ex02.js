function highestValue (numbers) {
  let highestNumber = Math.max.apply(null, numbers);
  for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] === highestNumber) {
      let index = numbers.indexOf(highestNumber)
      return index
    }
  } 
}

let numeros = [2, 3, 6, 7, 10, 1]

console.log(highestValue(numeros))




