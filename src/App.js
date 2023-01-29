import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPokemon, setURL } from './redux/pokemonSlice'
import PokemonImg from './components/PokemonImg';
import PokemonInfo from './components/PokemonInfo';
import PokemonList from './components/PokemonList';

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
      dispatch(setSelectedPokemon(json.results[0].name.trim()));
    })
  }, [currentPageURL])
  
  function previousPage() {
    setCurrentPageURL(prevPageURL);
  }
  
  function nextPage() {
    setCurrentPageURL(nextPageURL);
  }


  return (
    <div className="App">
      <div className='pokedex'>
        <div className="left-card">
          <PokemonImg />
        </div>
        <div className="right-card">
          <div className="top">
            <PokemonInfo />
          </div>
          <div className="bottom">
            <PokemonList currentPageURL={currentPageURL}/>
            <button className="prev-page" onClick={previousPage}>
              Back
            </button>
            <button className="next-page" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
