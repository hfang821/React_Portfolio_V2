import React, {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia, Stack, Chip} from '@mui/material';
import { validateEmail } from '../utils/helpers';


export default function Project({ color, projectInfo, num, theme }) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [Name, setName] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setName(inputValue);
      } 
    };
  
  
    const handleFormSubmit = (e) => {
      
      e.preventDefault();
  
      
      if (!validateEmail(email)) {
        setErrorMessage('Email or username is invalid');
        return;
      }
      setName('');
      setEmail('');
      alert(`Hello ${Name}`);
    };
  
    return(
        <div className="contact">
    <h1 style={{color: 'white', marginBottom: '34px', marginLeft: '2%'}}>Contact Me</h1>
  <form>
      <div class="mb-3" style={{width:"41%", marginLeft:"30%"}}>
        <label for="exampleInputPassword1" class="form-label" style={{color: 'skyblue'}}>Name</label>
        <input type="name" class="form-control" name="name" value={Name} onChange={handleInputChange}/>
      </div>
      <div class="mb-3" style={{width:"41%", marginLeft:"30%"}}>
        <label for="exampleInputEmail1" class="form-label" style={{color: 'skyblue'}}>Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
      <div class="mb-3" style={{width:"41%", marginLeft:"30%"}}>
        <label for="exampleFormControlTextarea1" class="form-label" style={{color: 'skyblue'}}>Message: </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/>
      </div>

      <button type="submit" class="btn btn-primary" onClick={handleFormSubmit} style={{backgroundColor: 'LightSeaGreen', marginTop:'2%'}}>Submit</button>
  </form>

</div>
    )
}