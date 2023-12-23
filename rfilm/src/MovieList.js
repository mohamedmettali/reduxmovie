import React, {useState} from 'react';
import MovieCard from "./MovieCard";
import Button from 'react-bootstrap/Button';
import FormModal from "./FormModal";


const  MovieList = ({movies}) => {
   
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  
  function openModal() {
    setModalIsOpen(true);
}

function closeModal() {
  setModalIsOpen(false);
}
    return (
<div style={{ display: "flex", flexWrap: "wrap" }}>
{movies.map((movie) => (
  <MovieCard key={movie.id} {...movie} />
  
))}
  <div>
        <Button variant="primary" onClick={openModal}>
          Add Movie
        </Button>
        <FormModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>

</div>

    )
}

export default MovieList;