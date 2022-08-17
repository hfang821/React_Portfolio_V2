import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate  } from "react-router-dom";

export default function Projects({ theme, currentPage, setCurrentPage }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage("about"); 
    })

    const changePage = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Nav theme={theme} currentPage={currentPage}/>
                    </Col>
                </Row>

                <Row style={{textAlign: 'center'}}>
                    <Col>
                        <img src='https://user-images.githubusercontent.com/95199209/185013234-00902c4c-4980-4d8b-a66a-40b2d6094bc9.jpg' width='500px' alt='Trip in Banff' style={{borderRadius:'5%', marginTop:'10%'}}></img>
                    </Col>
                    <Col style={{color: "white", marginTop:"10%",textAlign:"left"}}>
                        <h3 style={{color:"skyblue"}}>Kevin Fang</h3>
                        <p>Hi there! I am a full-stack web developer located in Toronto, ON.</p>
                        <p>I studied chemical engineering at the University of Western Ontario, Business Management at the Schulich School of Business.</p>
                        <p>With my passion and interest in evolving technologies, I have decided to bring my problem solving skills, creativity into the web development field.</p> 
                        <p>During my spare time, I enjoy powerlifting & bodybuilding, reading a sci-fi comic book or making a fine glass of cocktail for my family and friends.</p>
                    </Col>

                </Row>
                

                <Footer theme={theme} />
            </Container>
        </div>
    )

}