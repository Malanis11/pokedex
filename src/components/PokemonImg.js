import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const PokemonImg = () => {
    const [pokemonFrontImg, setPokemonFrontImg] = useState();
    const [pokemonBackImg, setPokemonBackImg] = useState();
    const pokemon = useSelector(state => state.pokemon);

    useEffect(() => {
        fetch(pokemon.URL + pokemon.selected)
        .then(res => res.json())
        .then(json => {
            setPokemonFrontImg(json.sprites.front_default);
            setPokemonBackImg(json.sprites.back_default);
        })
    }, [URL, pokemon.selected])

  return (
    <div className="left-card">
        <img src={pokemonFrontImg} alt="front-view" />
        <img src={pokemonBackImg} alt="back-view" />
    </div>
  )
}

export default PokemonImg