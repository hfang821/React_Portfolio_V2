import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Resume from '../../utils/Kevin_Fang_Resume.pdf'
import BanffImg from '../../utils/Banff.jpg';
import MountainImg from '../../utils/Mountain.jpg';
import TownImg from '../../utils/Kleinberg.jpg';
import LiftImg from '../../utils/Lift.png';
import PetImg from '../../utils/myPet.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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

    const images = [PetImg, BanffImg, MountainImg,TownImg, LiftImg];

    const properties = {
        prevArrow: <button style={{display: 'none'}}></button>,
        nextArrow: <button style={{ display: 'none' }}></button>
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Nav theme={theme} currentPage={currentPage}/>
                    </Col>
                </Row>

                <Row style={{textAlign: 'center'}}>
                    <Col style={{maxWidth:"45%", marginTop:'%'}}>
                        <Slide {...properties}>
                            <div className="each-slide-effect">
                                    <img src={images[0]} width='90%' alt='My Pet' style={{borderRadius:'5%', marginTop:'14%'}}></img>
                            </div>
                            <div className="each-slide-effect">
                                    <img src={images[1]} width='90%' alt='Trip in Banff' style={{borderRadius:'5%', marginTop:'14%'}}></img>
                            </div>
                            <div className="each-slide-effect">
                                    <img src={images[2]} width='90%' alt='Trip in Kleinberg' style={{borderRadius:'5%', marginTop:'14%'}}></img>
                            </div>
                            <div className="each-slide-effect">
                                    <img src={images[3]} width='90%' alt='Powerlifting Hobby' style={{borderRadius:'5%', marginTop:'14%'}}></img>
                            </div>
                            <div className="each-slide-effect">
                                    <img src={images[4]} width='90%' alt='Trip in Lake Louise' style={{borderRadius:'5%', marginTop:'14%'}}></img>
                            </div>
                        </Slide> 
                    </Col>

                    <Col style={{color: "white", marginTop:"6%",textAlign:"left", fontFamily:'Montserrat'}}>
                        <h3 style={{color:"skyblue", fontFamily:'Open Sans'}}>Kevin Fang</h3>
                        <p>Hi there! I am a full-stack web developer located in Toronto, ON.</p>
                        <p>I studied chemical engineering at the University of Western Ontario, Business Management at the Schulich School of Business.</p>
                        <p>With my passion and interest in evolving technologies, I decided to bring my problem solving skills, creativity into web development field.</p>
                        <p>I firmly believe that Web Development is the place where I can solve problems that others haven't solved yet. Therefore, I decided to accomplish a Full-Stack Development Certificate at the University of Toronto.</p>
                        <p>During my spare time, I enjoy powerlifting & bodybuilding, reading a sci-fi comic book or making a fine glass of cocktail for my family and friends.</p>
                        <Col style={{marginTop:'20px'}}>
                            <p style={{display:'inline-block', position:'relative', bottom:'7px'}}><a href={Resume} target='_blank' style={{textDecoration: 'none', color:'inherit', fontSize:'20px', backgroundColor: 'white', border:'0px', borderRadius:'6px', maxHeight: '45px', width:'8px'}}><p style={{ backgroundColor: 'white', border:'0px', borderRadius:'4px', maxHeight: '45px', color: 'black', fontFamily:'Hind'}}>Resume</p></a></p>
                            <p style={{display:'inline-block'}}><a href="https://www.linkedin.com/in/haoyufang" target='_blank' style={{textDecoration: 'none', color:'inherit', marginLeft:'55px'}}><i className="devicon-linkedin-plain" style={{margin:'0 60px 0 0', fontSize:'30px'}} ></i></a></p>
                            <p style={{display:'inline-block'}}><a href="https://github.com/hfang821" target='_blank' style={{textDecoration: 'none', color:'inherit'}}><i className="devicon-github-original" style={{margin:'0 60px 0 0', fontSize:'30px'}}></i></a></p>
                            <p style={{display:'inline-block'}}><a href="mailto:kevinfang1996@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} style={{color:'white', margin:'0 60px 0 0', paddingBottom:'3px', fontSize:'25px'}}></FontAwesomeIcon></a></p>
                            <p style={{display:'inline-block', position:'relative', bottom:'4px'}}><button target='_blank' onClick={(e) => changePage(e, "/contact")} style={{textDecoration: 'none', color:'inherit', fontSize:'20px', backgroundColor: 'white', border:'0px', borderRadius:'6px', maxHeight: '45px', padding:'0'}}><p style={{backgroundColor: 'white', border:'0px', borderRadius:'4px', maxHeight: '45px', color: 'black', fontFamily:'Hind', marginBottom:'0px'}}>Contact</p></button></p>
                        </Col>
                    </Col>

                </Row>
                

                <Footer theme={theme} currentPage='about'/>
            </Container>
        </div>
    )

}