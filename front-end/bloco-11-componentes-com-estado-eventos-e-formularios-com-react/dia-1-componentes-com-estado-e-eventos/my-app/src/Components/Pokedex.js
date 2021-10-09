import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: 0,
      type: ''
    };
    this.handleButton = this.handleButton.bind(this);
    this.resetTotal = this.resetTotal.bind(this);
    this.handleFire = this.handleFire.bind(this);
    this.handlePsychic = this.handlePsychic.bind(this);
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

  handleFire = () => {
    this.setState((prevState) => {
      return {
        pokemon: prevState.pokemon + 1,
      };
    });
  };

  handlePsychic = () => {};

  render() {
    const { pokemons } = this.props;
    let currentPokemon = this.state.pokemon;
    const allPokemonsLength = pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    )).length;

    const checkPokemons = () => {
      if (currentPokemon > allPokemonsLength - 1) {
        return this.resetTotal();
      } else {
        return currentPokemon;
      }
    };

    const allPokemons = pokemons.map((item) => (
      <Pokemon key={item.id} pokemon={item} />
    ))[checkPokemons()];

    const fireTypes = () => pokemons
      .filter((item) => item.type === 'Fire')
      .map((item) => <Pokemon key={item.id} pokemon={item} />);

    return (
      <div>
        <div style={pokedex}>{allPokemons}</div>
        
        <button style={btnStyle} onClick={this.handleButton}>
          Change Pokemon
        </button>
        <button style={btnStyle} onClick={() => this.handleFire()}>
          Fire
        </button>
        <button style={btnStyle} onClick={this.handlePsychic}>
          Psychic
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
