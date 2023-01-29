import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPokemon } from '../redux/pokemonSlice';

const PokemonList = ({currentPageURL}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(currentPageURL)
        .then(res => res.json())
        .then(json => {
            setPokemonList(json.results.map(data => data.name));
        })

    }, [currentPageURL, pokemon.selected])

  return (
    <div className='pokemon-list'>
        {pokemonList.map(pokemon => (
            <p onClick={e => {dispatch(setSelectedPokemon(e.target.innerHTML.toLowerCase().trim())); console.log(e.target.innerHTML.toLowerCase().trim())}}  key={pokemon} value={pokemon}> {pokemon.toUpperCase()} </p>
        ))}
    </div>
  )
}

export default PokemonList