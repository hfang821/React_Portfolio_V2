import React from "react";
import { useNavigate  } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Nav({theme, currentPage}) {
    const navigate = useNavigate();

    const changePage = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <Navbar collapseOnSelect expand="xs" variant={theme ? "light" : "dark"}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={theme ? "dropdown" : "dropdown-dark"}>
            <Container className={theme ? "dropdown-border" : "dropdown-border-dark"}>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/")}>
                                {currentPage === "home" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} />}
                                <h1 className="first-drop-text" style={{ display: "inline" }}>home</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/project")}>
                                {currentPage === "project" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} />}
                                <h1 className="second-drop-text" style={{ display: "inline" }}>projects</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/skills")}>
                                {currentPage === "skills" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} />}
                                <h1 className="third-drop-text" style={{ display: "inline" }}>skills</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={(e) => changePage(e, "/aboutme")}>
                                {currentPage === "aboutme" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} />}
                                <h1 className="fourth-drop-text" style={{ display: "inline" }}>about me</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}