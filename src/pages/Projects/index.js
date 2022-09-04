import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Project from "../../components/Project";
import projectInfo from "../../utils/projectInfo";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate  } from "react-router-dom";

export default function Projects({ theme, currentPage, setCurrentPage }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage("project"); 
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
                <h1 style={theme? {color: "black"} : {color: "white", fontFamily:'Open Sans'}}>My Projects</h1>
                <p style={theme? {color: "black"} : {color: "skyblue", fontFamily:'Montserrat'}}>Check out my latest projects that I've been working on</p>
            </Row>

            <Container style={{marginLeft:'5%'}}>
                <Row style={{marginTop:'1%'}}>
                            {projectInfo ? projectInfo.map((projectData) => {
                                return(
                                    <Col style={{textAlign: 'center'}}>
                                         <Project projectInfo={projectData} />
                                    </Col>
                                )
                            }) : ('No Project Yet.')}
                </Row>
            </Container>

            <Footer theme={theme} />
        </Container>
        </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}