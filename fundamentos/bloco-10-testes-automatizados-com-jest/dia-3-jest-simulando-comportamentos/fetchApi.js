const fetchPuppiesApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(response.ok ? Promise.resolve(json) : Promise.reject(json));
};

module.exports = { fetchPuppiesApi };
