import './App.css';
import {React,useEffect} from 'react';
import MovieList from "./MovieList";
import { moviesData } from './moviesData';
import { useDispatch,useSelector } from 'react-redux';
import { get_movies } from './redux/actions';
import Modal from 'react-modal';


function App() {
  Modal.setAppElement("#root")

  const dispatch = useDispatch();
  const movies = useSelector((state)=>state.movies);
  useEffect (()=>{
    dispatch(get_movies(moviesData));
  }, []);


  return (
    <div className="App">

<MovieList movies={movies}/>


    </div>
  );
}

export default App;
