import React, { useRef, useEffect } from 'react';
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
                    <Nav />
                </Col>
            </Row>

            <Row style={{textAlign: 'center'}}>
                <h1 style={theme? {color: "black"} : {color: "white"}}>My Projects</h1>
                <p style={theme? {color: "black"} : {color: "skyblue"}}>Check out my latest projects that I've been working on</p>
            </Row>

            <Container>
                <Row>
                            {projectInfo ? projectInfo.map((projectData) => {
                                return(
                                    <div class="col-sm">
                                         <Project projectInfo={projectData} />
                                    </div>
                                )
                            }) : ('No Project Yet.')}
                </Row>
            </Container>

            <Footer theme={theme} />
        </Container>
        </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}