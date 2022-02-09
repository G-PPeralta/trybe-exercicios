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

myFunction(5, 10, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

myFunction(5, 5, "a")
  .then((resolve) => console.log(resolve))
  .then((error) => console.log(error));

myFunction(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .then((error) => console.log(error));
