import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog"


export default function App({theme, setTheme}) {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<Home theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>     
                </Route>
                <Route exact path="/project"
                    element={<Projects theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>
                </Route>
                <Route exact path="/skills"
                    element={<Skills theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>
                </Route>
                <Route exact path="/about"
                    element={<About theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />}>
                </Route>
                <Route exact path="/blogs"
                    element={<Blog theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} style={{overflow: 'scroll'}}/>}>
                </Route>
            </Routes>
        </Router>
    )
};