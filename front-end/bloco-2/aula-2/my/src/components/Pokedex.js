import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {  
    const pokemon0 = pokemons[0];
    // console.log(pokemon0, pokemons);
    return (
      <>
        <h1>Pokedex</h1>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon}/>)}
      </>
    );
  }
}

export default Pokedex;
