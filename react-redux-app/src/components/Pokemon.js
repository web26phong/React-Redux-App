import React from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import {fetchPokemon} from "../actions";

const Pokemon = (props) => {
    return (
        <div>
            <button onClick={props.fetchPokemon}>Get Pokemon List!</button>

            {/* INITIAL STATE */}
            {!props.pokemonlist && !props.isLoading && props.error === "" && (
                <p>Click the button! Cmon!! GOTTA CATCH'EM ALL!!!!!!</p>
            )}

            {/* LOADING STATE */}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000} //3 secs
              />
            )}

            {/* LOADED STATE */}
            {!props.isLoading && props.pokemonlist && (
            <div>
                {props.pokemonlist.map((pokemon, index) => (
                    <p key={index}>#{index+1}. {pokemon.name}</p>
                ))}
            </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pokemonlist: state.pokemonlist,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchPokemon})(Pokemon);