import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Typist from 'react-typist';
import "../pages/Home/index.css";

export default function Footer({ theme, currentPage, setCurrentPage}) {

    return (
        <Navbar className={theme ? "footer" : "footer-dark"} fixed="bottom" variant="dark" style={{ justifyContent: "center" }}>
            <p style={{textAlign: 'center'}}>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/hfang821" style={theme ? { color: "black" } : { color: "white" }}> Kevin Fang </a>
                <Typist cursor={{ show: false }}>
                <Typist.Delay ms={100} />
                {currentPage === 'about' && <p>Let's connect: <a href="mailto:kevinfang1996@gmail.com" target='_blank' style={theme ? { color: "black" } : { color: "white" }}>kevinfang1996@gmail.com</a></p>}
            </Typist>
            </p>
        </Navbar>
    )
}