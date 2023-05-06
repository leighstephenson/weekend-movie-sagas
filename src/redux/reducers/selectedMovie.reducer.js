// When users click 
const selectedMovie = (state = {}, action) => {
    if (action.type === 'SET_SELECTED_MOVIE') {
        return action.payload
    } else if (action.type === 'CLEAR_SELECTED_MOVIE') {
        return {}
    }
    return state
};

export default selectedMovie;