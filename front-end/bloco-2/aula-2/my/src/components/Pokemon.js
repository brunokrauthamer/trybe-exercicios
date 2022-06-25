import React from 'react';

class Pokemon extends React.Component {
  render () {
    const pokemonInfo = this.props.pokemon;
    const pokeWeightInfo = pokemonInfo.averageWeight;
    const pokeWeight = `${pokeWeightInfo.value} ${pokeWeightInfo.measurementUnit}`
    return (
      <div>
        <div className='name'>{pokemonInfo.name}</div>
        <div className='type'>{pokemonInfo.type}</div>
        <div className='weight'>{pokeWeight}</div>
        <img className='image' src={pokemonInfo.image} alt={pokemonInfo.name}/>
      </div>
    );
  }
}

export default Pokemon;
