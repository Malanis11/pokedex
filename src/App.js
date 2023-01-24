import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPokemon, setURL } from './redux/pokemonSlice'
import PokemonImg from './components/PokemonImg';
import PokemonInfo from './components/PokemonInfo';

function App() {
  const [currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(currentPageURL)
    .then(res => res.json())
    .then(json => {
      setNextPageURL(json.next);
      setPrevPageURL(json.previous);
      dispatch(setSelectedPokemon(json.results[0].name));
      dispatch(setURL(currentPageURL));
    })
  }, [currentPageURL])
  
  return (
    <div className="App">
      <div className='pokedex'>
        <PokemonImg />  
        <PokemonInfo />
      </div>
    </div>
  );
}

export default App;
