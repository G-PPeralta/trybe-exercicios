import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
    };

    fetch('https://pokeapi.co/api/v2/pokemon/3')
      .catch(console.log)
      .then((response) => response.json())
      .then((pokemon) =>
        this.setState({
          ...this.state,
          pokemons: [
            {
              id: pokemon.id,
              name: pokemon.name,
              type: pokemon.types[0].type.name,
              averageWeight: {
                value: pokemon.weight,
                measurementUnit: 'kg',
              },
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              moreInfo: 'No more info...',
            },
          ],
        })
      );
  }

  render() {
    // const allPokemons = pokemons.map((item) => (
    //   <Pokemon key={item.id} pokemon={item} />
    // ));

    console.log('RENDER');

    const allPokemons = this.state.pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    ));

    return <div style={pokedex}>{allPokemons}</div>;
  }
}

const pokedex = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px 10px',
};

export default Pokedex;
