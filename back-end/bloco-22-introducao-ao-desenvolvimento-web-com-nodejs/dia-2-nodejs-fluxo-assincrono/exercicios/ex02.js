function myFunction(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c !== 'number')
      reject("Informe apenas números");

    const result = (a + b) * c;

    if (result < 50) {
      return reject("Valor muito baixo");
    }

    resolve(result);
  });
  return promise;
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function consumeMyFunction() {
  const a = randomNumber();
  const b = randomNumber();
  const c = randomNumber();

  myFunction(a, b, c)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error));
}

consumeMyFunction()


