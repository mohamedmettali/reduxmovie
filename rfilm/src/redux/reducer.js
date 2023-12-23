import { GET_MOVIES,ADD_MOVIE } from "./actionTypes";


const initialState = {
    movies: [],
   
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES: 
        return {...state, movies:action.payload}
        case ADD_MOVIE: 
        return {...state, movies: [...state.movies, action.payload]}
      default:
        return state;
    }
  };
  export default reducer;