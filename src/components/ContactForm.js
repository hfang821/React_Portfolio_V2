import React, {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia, Stack, Chip} from '@mui/material';
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';

export default function Project({ color, projectInfo, num, theme }) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [Name, setName] = useState('');
    const [Subject, setSubject] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'subject'){
        setSubject(inputValue);
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
      alert(`Hello ${Name}, I will return to your message soon!`);

      emailjs.sendForm('service_ychkaw9', 'template_wmvj3um', e.target, 'nNDcTXGjx8wGrJLqN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

    };

  
    return(
        <div className="contact">
    <h1 style={{color: 'white', marginBottom: '34px', marginLeft: '2%'}}>Contact Me</h1>
  <form onSubmit={handleFormSubmit}>
      <div class="mb-3" style={{width:"41%", marginLeft:"30%"}}>
        <label for="exampleInputPassword1" class="form-label" style={{color: 'skyblue'}}>Subject</label>
        <input type="subject" class="form-control" name="subject" value={Subject} onChange={handleInputChange}/>
      </div>
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
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message"/>
      </div>

      <button type="submit" class="btn btn-primary" style={{backgroundColor: 'LightSeaGreen', marginTop:'2%'}}>Submit</button>
  </form>

</div>
    )
}