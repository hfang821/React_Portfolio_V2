import React, { useRef, useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Resume from '../../utils/Kevin_Fang_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
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
                    <Col style={{color: "white", marginTop:"5%",textAlign:"left"}}>
                        <h3 style={{color:"skyblue"}}>Kevin Fang</h3>
                        <p>Hi there! I am a full-stack web developer located in Toronto, ON.</p>
                        <p>I studied chemical engineering at the University of Western Ontario, Business Management at the Schulich School of Business.</p>
                        <p>With my passion and interest in evolving technologies, I have decided to bring my problem solving skills, creativity into the web development field.</p>
                        <p>I firmly believe that Web Development is the place where I can solve problems that others haven't solved yet.</p>
                        <p>During my spare time, I enjoy powerlifting & bodybuilding, reading a sci-fi comic book or making a fine glass of cocktail for my family and friends.</p>
                        <Col style={{marginTop:'20px'}}>
                            <p style={{display:'inline-block', position:'relative', bottom:'7px'}}><a href={Resume} target='_blank' style={{textDecoration: 'none', color:'inherit', fontSize:'20px',fontStyle:'italic'}}>Resume</a></p>
                            <p style={{display:'inline-block'}}><a href="https://www.linkedin.com/in/haoyufang" target='_blank' style={{textDecoration: 'none', color:'inherit', marginLeft:'55px'}}><i className="devicon-linkedin-plain" style={{margin:'0 60px 0 0', fontSize:'30px'}} ></i></a></p>
                            <p style={{display:'inline-block'}}><a href="https://github.com/hfang821" target='_blank' style={{textDecoration: 'none', color:'inherit'}}><i className="devicon-github-original" style={{margin:'0 60px 0 0', fontSize:'30px'}}></i></a></p>
                            <p style={{display:'inline-block'}}><a href="mailto:kevinfang1996@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} style={{color:'white', margin:'0 60px 0 0', paddingBottom:'3px', fontSize:'25px'}}></FontAwesomeIcon></a></p>
                            <p style={{display:'inline-block', position:'relative', bottom:'7px'}}><button target='_blank' onClick={(e) => changePage(e, "/contact")} style={{textDecoration: 'none', color:'inherit', fontSize:'20px', fontStyle:'italic', backgroundColor: 'transparent', border:'0px'}}>Contact Me</button></p>
                        </Col>
                    </Col>

                </Row>
                

                <Footer theme={theme} currentPage='about'/>
            </Container>
        </div>
    )

}