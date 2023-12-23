import React, {useState} from 'react';
import Modal from 'react-modal';
import { Col,Form,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { add_movie } from './redux/actions';


function FormModal({ modalIsOpen, closeModal }) {

  

  const [image, setimage] = useState('');
  const [rating, setrating] = useState('');
  const [name, setname] = useState('');
  const [date, setdate] = useState('');
  const [type, settype] = useState('');
  const [seasons, setseasons] = useState('');
  const [description, setdescription] = useState('');

  const dispatch = useDispatch();


  const add = () => {
    const newmovie = {
      image,
      rating,
      name,
      date,
      type,
      seasons,
      description
    };
    dispatch(add_movie(newmovie));
    closeModal();
  }


  
    return (
      <div> 
       
        <Modal
          isOpen={modalIsOpen} >
       
       <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Image" value={image} onChange={(e)=> {setimage(e.target.value)}}  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" placeholder="Rating"  value={rating} onChange={(e)=> {setrating(e.target.value)}} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name"  value={name} onChange={(e)=> {setname(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="number" placeholder="Date"  value={date} onChange={(e)=> {setdate(e.target.value)}} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Type"  value={type} onChange={(e)=> {settype(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Seasons</Form.Label>
          <Form.Control type="text" placeholder="Seasons"  value={seasons} onChange={(e)=> {setseasons(e.target.value)}} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description"  value={description} onChange={(e)=> {setdescription(e.target.value)}}   />
        </Form.Group>

     
      </Row>
<div style = {{textAlign:'center'}}>
<button className="btn btn-success" onClick={add} >Add movie</button>
<button onClick={closeModal} className="btn btn-danger">Exit</button>
</div>
    </Form>
  
        </Modal>
      </div>
    );
  }
  
export default FormModal;