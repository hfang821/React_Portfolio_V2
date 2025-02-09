import React, { useEffect } from "react";
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Contact from '../../components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({theme, currentPage, setCurrentPage}){

    useEffect(()=>{
        setCurrentPage("contact"); 
    })

    return (
        <Container>
            <Row>
                <Col>
                    <Nav theme={theme} currentPage={currentPage}/>
                </Col>
            </Row>
        
            <Row style={{textAlign: 'center'}}>
                    <Contact />
            </Row>

            <Footer theme={theme} />

        </Container>
    )
}