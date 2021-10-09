import React from 'react';
import Pokedex from './Pokedex';
import pokemons from '../data';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={title}>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}

const title = {
  textAlign: 'center',
  fontFamily: 'Arial'
}

export default App;
