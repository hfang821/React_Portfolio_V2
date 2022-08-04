import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import LiftingBlog from "./pages/LiftingBlog"

export default function Router({theme, setTheme}) {
    const [currentPage, setCurrentPage] = useState("");

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/project">
                    <Projects theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/skills">
                    <Skills theme={theme} setTheme={setTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/about">
                    <About theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/contact">
                    <Contact theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route exact path="/blogs">
                    <LiftingBlog theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}