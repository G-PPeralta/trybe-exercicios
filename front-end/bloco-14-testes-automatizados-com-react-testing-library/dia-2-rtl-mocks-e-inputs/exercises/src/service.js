const generateRandomNumber = () => Math.floor(Math.random() * 101);

const strToUpperCase = (str) => str.toUpperCase();

const returnFirstLetter = (str) => str.slice(0,1);

const mergeStrings = (a, b) => a.concat(b);

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { generateRandomNumber, strToUpperCase, returnFirstLetter, mergeStrings, fetchDog };
