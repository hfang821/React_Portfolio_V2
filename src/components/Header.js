import React from "react";
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';



export default function Header({ theme, changePage }) {
    const headerFadeIn = () => {
        setInterval(headerShow, 100);
    };

    const headerShow = () => {
        const target = document.getElementById("fade");
        if (target) {
            let opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));

            if (opacity < 1) {
                opacity += 0.1;
                target.style.opacity = opacity
            } else {
                clearInterval(0); 
            }
        }
    }

    return (
        <div style={theme ? {} : { color: "white"}}>
            <Typist cursor={{ show: false }} onTypingDone={() => headerFadeIn()}>
                <Typist.Delay ms={350} />
                <h1>Hello, my name is <span style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }}>Kevin Fang</span></h1>
                <Typist.Delay ms={350} />
                <h1>
                I am a <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/hfang821">Chemical Engineer</a>
                <Typist.Backspace count={20} delay={350} />
                <Typist.Delay ms={350} /> an <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/hfang821">Advanced Powerlifter</a>
                <Typist.Backspace count={24} delay={350} />
                <Typist.Delay ms={350} /> a <a style={theme ? { color: "#8900f2" } : { color: "#7bdff2" }} href="https://github.com/hfang821"><FontAwesomeIcon icon={faLayerGroup} style={{color:'white', margin:'0 15px 0 0', paddingBottom:'3px', fontSize:'25px'}}></FontAwesomeIcon>Full-Stack Developer</a>
                </h1>
            </Typist>
            <div id="fade" className="fade">
                <div>
                    <h3>Check out my <span className={theme ? "h-link" : "h-link-dark"} onClick={(e) => changePage(e, "/project")}>projects page</span> to see my latest projects.</h3>
                    <h3>Or you can contact me directly through my <button className={theme ? "h-link" : "h-link-dark"} onClick={(e) => changePage(e, "/contact")} style={{color: 'skyblue', backgroundColor: 'transparent', border:'0px'}}>contact page.</button></h3>
                </div>
            </div>
        </div>
    )
}