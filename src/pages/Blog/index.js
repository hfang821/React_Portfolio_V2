import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Blog from '../../components/Blog';
import blogInfo from '../../utils/blogInfo';
import { useNavigate  } from "react-router-dom";
import { Timeline } from '@mui/lab';

export default function Blogs({ theme, currentPage, setCurrentPage }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage("blogs"); 
    })
    
    const changePage = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <Container>

            <Row>
                <Col>
                    <Nav theme={theme} currentPage={currentPage}/>
                </Col>
            </Row>

                <Timeline position="alternate">
                            {blogInfo ? blogInfo.map((blogData) => {
                                return(
                                         <Blog blogInfo={blogData} />
                                )
                            }) : ('No Project Yet.')}
                </Timeline>

            <Footer theme={theme} />

        </Container>
    )

}