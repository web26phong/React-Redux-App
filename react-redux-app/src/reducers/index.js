const initialState = {
    isLoading: false,
    error: "",
    pokemonlist: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_POKEMON_START":
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case "FETCHING_POKEMON_SUCCESS":
            return {
                ...state,
                isLoading: false,
                pokemonlist: action.payload
            };
        case "FETCHING_POKEMON_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: "OOPS! SOMETHING WENT WRONG. TRY AGAIN LATER"
            };
        default:
            return state;
    }
}