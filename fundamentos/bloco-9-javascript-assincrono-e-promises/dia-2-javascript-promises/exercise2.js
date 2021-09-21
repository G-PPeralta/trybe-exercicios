const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const randomNumber = () => Math.floor(Math.random() * 50 + 1);
    const arr = Array.from(
      { length: 10 },
      () => randomNumber() * randomNumber()
    );
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    (sum < 8000) ? resolve(sum) : reject(sum);
  });

  promise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then((sum) => console.log(sum.reduce((acc, curr) => acc + curr, 0)))
    .catch((sum) =>
      console.log(`É mais de oito mil! Essa promise deve estar quebrada!`)
    );
};

fetchPromise();
