import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills({theme}) {
    return (
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{color: "white"}}>Technologies and Languages</h1>
                    <p style={{color: "skyblue"}}>Here are the technologies and languages I have used towards my projects!</p>
                </Col>
            </Row>

            <Row style={{textAlign: 'center', color: "white", fontSize: "60px"}}>
                <Col>
                    <i className="devicon-javascript-plain"></i>
                </Col>
                <Col>
                    <i className="devicon-html5-plain"></i>
                </Col>
                <Col>
                    <i className="devicon-css3-plain"></i>
                </Col>
                <Col>
                    <i className="devicon-react-original"></i>
                </Col>
                <Col>
                    <i className="devicon-handlebars-plain-wordmark"></i>
                </Col>
            </Row>

            <Row style={{textAlign: 'center', color: "white", fontSize: "60px"}}>
                <Col>
                    <i className="devicon-bootstrap-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-jquery-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-materialui-plain"></i>
                </Col>
                <Col>
                    <i className="devicon-redux-original"></i>
                </Col>
                <Col>
                    <i className="devicon-foundation-plain-wordmark"></i>
                </Col>
            </Row>

            <Row style={{textAlign: 'center', color: "white", fontSize: "60px"}}>
                <Col>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-express-original-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-graphql-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-npm-original-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-linux-plain"></i>
                </Col>
            </Row>
                
            <Row style={{textAlign: 'center', color: "white", fontSize: "60px"}}>
                <Col>
                    <i className="devicon-mongodb-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-mysql-plain-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-github-original-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-heroku-original-wordmark"></i>
                </Col>
                <Col>
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                </Col>
            </Row>
        </Container>
    )
}