import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../pages/Home/index.css";

export default function Footer({ theme }) {
    return (
        <Navbar className={theme ? "footer" : "footer-dark"} fixed="bottom" variant="dark" style={{ justifyContent: "center" }}>
            <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/hfang821" style={theme ? { color: "black" } : { color: "white" }}> Kevin Fang </a></p>
        </Navbar>
    )
}