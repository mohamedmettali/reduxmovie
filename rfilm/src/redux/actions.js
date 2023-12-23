import { GET_MOVIES,ADD_MOVIE } from "./actionTypes";


export const get_movies = (movies) => {
    return {
      type: GET_MOVIES,
      payload: movies,
      
    };
  };

  export const add_movie = (movies) => {
    return {
      type: ADD_MOVIE,
      payload: movies,
      
    };
  };