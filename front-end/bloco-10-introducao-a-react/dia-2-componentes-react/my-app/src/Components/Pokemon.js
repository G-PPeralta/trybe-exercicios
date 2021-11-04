import React from 'react'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {

    const {name, type, averageWeight, image} = this.props.pokemon;

    return (
      <div style={container}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}

const container = {
  display: 'flex',
  flexWrap: 'wrap',
  border: '1px solid grey',
  borderRadius: '10px',
  alignItems: 'center',
  justifyContent: 'space-around',
  flex: '1 1 0',
  padding: '10px',
  minWidth: '25%',
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon