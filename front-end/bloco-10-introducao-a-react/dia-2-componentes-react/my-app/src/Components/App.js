import React from 'react';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={title}>Pokedex</h1>
        <Pokedex />
      </div>
    )
  }
}

const title = {
  textAlign: 'center',
  fontFamily: 'Arial'
}

export default App;
