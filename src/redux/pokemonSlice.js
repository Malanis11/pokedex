import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        selected: 'bulbasaur',
        URL: 'https://pokeapi.co/api/v2/pokemon/'
    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selected = action.payload
        },
        setURL: (state, action) => {
            state.URL = action.payload
        }
    }
})

export const { setSelectedPokemon } = pokemonSlice.actions;
export const { setURL } = pokemonSlice.actions;
export default pokemonSlice.reducer;