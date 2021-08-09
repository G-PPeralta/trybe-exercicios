function sumOfAllTheElements(number) {
  let sum = 0;
  for(let i = 1; i <= 5; i += 1) {
    sum += i;
  }
  return sum;
}

let N = 5;

console.log(sumOfAllTheElements(N));


//1 + 2 + 3 + 4 + 5 = soma de Gauss