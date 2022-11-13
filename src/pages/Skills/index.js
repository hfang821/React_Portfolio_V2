import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Skills from "../../components/Skill";
import { useNavigate  } from "react-router-dom";
import './index.css';

export default function Projects({ theme, currentPage, setCurrentPage }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage("skills"); 
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

            <Row>
                <Col>
                    <Skills theme={theme} />
                </Col>
            </Row>

            </Container>
            <Footer theme={theme}/>
        </div>
    )
}