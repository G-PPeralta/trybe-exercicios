import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: 0,
      type: 'all',
    };
  }

  handleButton = () => {
    this.setState((prevState) => {
      return {
        pokemon: prevState.pokemon + 1,
      };
    });
  };

  resetTotal = () => {
    this.setState({
      pokemon: 0,
    });
  };

  handleFireButton = () => {
    this.setState({ type: 'fire' });
  };

  handlePsychicButton = () => {
    this.setState({ type: 'psychic' });
  };

  handleAllTypesButton = () => {
    this.setState({ type: 'all' });
  };

  render() {
    const { pokemons } = this.props;
    let currentPokemon = this.state.pokemon;

    const allPokemonsLength = pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    )).length;

    const allFirePokemonsLength = pokemons
      .filter((item) => item.type === 'Fire')
      .map((item) => <Pokemon key={item.id} pokemon={item} />).length;

    const allPsychicPokemonsLength = pokemons
      .filter((item) => item.type === 'Psychic')
      .map((item) => <Pokemon key={item.id} pokemon={item} />).length;

    const checkPokemons = () => {
      if (currentPokemon > allPokemonsLength - 1) {
        return this.resetTotal();
      } else {
        return currentPokemon;
      }
    };

    const checkFirePokemons = () => {
      if (currentPokemon > allFirePokemonsLength - 1) {
        return this.resetTotal();
      } else {
        return currentPokemon;
      }
    };

    const checkPsychicPokemons = () => {
      if (currentPokemon > allPsychicPokemonsLength - 1) {
        return this.resetTotal();
      } else {
        return currentPokemon;
      }
    };

    const allPokemons = () =>
      pokemons.map((item) => <Pokemon key={item.id} pokemon={item} />)[
        checkPokemons()
      ];

    const fireTypes = () =>
      pokemons
        .filter((item) => item.type === 'Fire')
        .map((item) => <Pokemon key={item.id} pokemon={item} />)[
        checkFirePokemons()
      ];

    const psychicTypes = () =>
      pokemons
        .filter((item) => item.type === 'Psychic')
        .map((item) => <Pokemon key={item.id} pokemon={item} />)[
        checkPsychicPokemons()
      ];

    const renderPokemons = () => {
      if (this.state.type === 'all') {
        return allPokemons();
      } else if (this.state.type === 'psychic') {
        return psychicTypes();
      } else {
        return fireTypes();
      }
    };

    return (
      <div>
        <div style={pokedex}>{renderPokemons()}</div>
        <button style={btnStyle} onClick={() => this.handleButton()}>
          Next Pokemon
        </button>
        <button style={btnStyle} onClick={() => this.handleFireButton()}>
          Fire
        </button>
        <button style={btnStyle} onClick={() => this.handlePsychicButton()}>
          Psychic
        </button>
        <button style={btnStyle} onClick={() => this.handleAllTypesButton()}>
          All
        </button>
        <button style={btnStyle} onClick={this.resetTotal}>
          Reset
        </button>
      </div>
    );
  }
}

const pokedex = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px 10px',
};

const btnStyle = {
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  marginLeft: '5px',
  background: '#EF5350',
  paddingLeft: '1.1rem',
  paddingRight: '1.1rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  border: '1px solid #fff0',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Pokedex;
