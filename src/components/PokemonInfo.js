import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const PokemonInfo = () => {
    const [pokemonNationalNumber, setPokemonNationalNumber] = useState();
    const [pokemonType, setPokemonType] = useState([]);
    // const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonHeight, setPokemonHeight] = useState();
    const [pokemonWeight, setPokemonWeight] = useState();
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const pokemon = useSelector(state => state.pokemon);

    useEffect(() => {
        fetch(pokemon.URL + pokemon.selected)
        .then(res => res.json())
        .then(json => {
            setPokemonNationalNumber(json.id);
            setPokemonType(json.types.map(data => data.type.name.toUpperCase()));
            setPokemonHeight(json.height/10);
            setPokemonWeight(json.weight/10);
            setPokemonAbilities(json.abilities.map(data => data.ability));
        })
    })

  return (
    <div className='right-card'>
        <span> {pokemon.selected.toUpperCase()} </span>{pokemon.selected.toUpperCase()} N° {pokemonNationalNumber} <br/>
    </div>
  )
}

export default PokemonInfo