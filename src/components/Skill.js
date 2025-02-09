import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../pages/Skills/index.css';

export default function Skills({theme}) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {props}
        </Tooltip>
      );

    return (
        <Container>
            <Row style={{marginTop: '2%'}}>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{color: "white", fontFamily:'Open Sans'}}>Technologies and Languages</h1>
                    <p style={{color: "skyblue", fontFamily:'Montserrat'}}>Hover over the technologies and languages I have used towards my projects!</p>
                </Col>
            </Row>


            <Row style={{textAlign: 'center', color: "white", fontSize: "54px"}} className="icon-row">
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('JavaScript')}
                >
                    <i className="devicon-javascript-plain"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('HTML 5')}
                >
                    <i className="devicon-html5-plain"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('CSS 3')}
                >
                    <i className="devicon-css3-plain"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Angular.js')}
                >
                   <i className="devicon-angularjs-plain"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('React.js')}
                >
                    <i className="devicon-react-original"></i>
                    </OverlayTrigger>

                </Col>

            </Row>

            <Row style={{textAlign: 'center', color: "white", fontSize: "54px"}} className="icon-row">
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('TypeScript')}
                >
                    <i className="devicon-typescript-plain"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('jQuery')}
                >
                    <i className="devicon-jquery-plain-wordmark"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('material UI')}
                >
                    <i className="devicon-materialui-plain"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Redux')}
                >
                    <i className="devicon-redux-original"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Foundation')}
                >
                    <i className="devicon-foundation-plain-wordmark"></i>
                    </OverlayTrigger>

                </Col>
            </Row>

            <Row style={{textAlign: 'center', color: "white", fontSize: "54px"}} className="icon-row">
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Node.js')}
                >
                    <i className="devicon-nodejs-plain-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Express.js')}
                >
                    <i className="devicon-express-original-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('GraphQL')}
                >
                    <i className="devicon-graphql-plain-wordmark"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('npm modules')}
                >
                    <i className="devicon-npm-original-wordmark"></i>
                    </OverlayTrigger>
                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Linux Commands')}
                >
                    <i className="devicon-linux-plain"></i>
                    </OverlayTrigger>

                </Col>
            </Row>
                
            <Row style={{textAlign: 'center', color: "white", fontSize: "54px"}} className="icon-row">
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('MongoDB')}
                >
                    <i className="devicon-mongodb-plain-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('MySQL')}
                >
                    <i className="devicon-mysql-plain-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Github')}
                >
                    <i className="devicon-github-original-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('Heroku')}
                >
                    <i className="devicon-heroku-original-wordmark"></i>
                    </OverlayTrigger>

                </Col>
                <Col>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip('AWS')}
                >
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                    </OverlayTrigger>

                </Col>
            </Row>
            <Row style={{ textAlign: 'center', fontSize: "20px", marginTop: '2rem', color:'skyblue', fontFamily:'Montserrat' }}>
                <Col>
                    <i>And Many More to Come...</i>
                </Col>
            </Row>

        </Container>
    )
}