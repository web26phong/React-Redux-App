import axios from "axios";

export const fetchPokemon = () => dispatch => {
    dispatch({type: "FETCHING_POKEMON_START"})
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(res => {
        console.log(res)
        dispatch({type: "FETCHING_POKEMON_SUCCESS", payload: res.data.results})
    })
    .catch(err => {
        dispatch({type: "FETCHING_POKEMON_FAILURE"})
    })
}