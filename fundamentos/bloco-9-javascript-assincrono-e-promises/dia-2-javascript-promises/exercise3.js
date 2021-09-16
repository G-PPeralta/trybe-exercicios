const sumNumbers = () => {
    const randomNumber = () => Math.floor(Math.random() * 50 + 1);
    const arr = Array.from(
      { length: 10 },
      () => randomNumber() * randomNumber()
    );
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    if(sum >= 8000) {
      throw new Error();
    }

    return sum
}

const sumArray = (sum) => [2, 3, 5, 10].map(number => sum / number).reduce((acc, curr) => acc + curr, 0)

const fetchPromise = async () => {
  try {
    const sum = await sumNumbers();
    const sumArray = await sumArray();
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

fetchPromise();