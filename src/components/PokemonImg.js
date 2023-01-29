import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ErrorImg from "../image-unavailable.png";

const PokemonImg = () => {
    const [pokemonFrontImg, setPokemonFrontImg] = useState();
    const [pokemonBackImg, setPokemonBackImg] = useState();
    const pokemon = useSelector(state => state.pokemon);
    console.log(pokemon.selected);
    useEffect(() => {
        fetch(pokemon.URL + pokemon.selected)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            console.log(pokemon.URL + pokemon.selected);
            setPokemonFrontImg(json.sprites.front_default);
            setPokemonBackImg(json.sprites.back_default);
        })
    }, [pokemon.URL, pokemon.selected])

  return (
    <div>
        {pokemonBackImg == null && pokemonFrontImg == null ? <img className='no-image' src={ErrorImg} alt='unavailable'/> :
         pokemonBackImg == null ? <div className="only-front-sprite"><img src={pokemonFrontImg} alt="front-view"/></div> :
        <div>
          <img src={pokemonFrontImg} alt="front-view" /> 
          <img src={pokemonBackImg} alt="back-view" />
        </div>
        }
    </div>
  )
}

export default PokemonImg