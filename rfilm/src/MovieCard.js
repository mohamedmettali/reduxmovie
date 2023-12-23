import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Card } from 'react-bootstrap';


const MovieCard = ({ image, name, rating, date, type, seasons,description }) => {
 

  return (
    <div>
      
      <Card style={{ width: '25rem', height: '100%' }}>
        
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>
            <p>Date: {date}</p>
            <p>Type: {type}</p>
            <p>Seasons: {seasons}</p>
            <p>rating: {rating}</p>
            <p>Description: {description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;