import React from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function Project({ color, projectInfo, num, theme }) {
    const handleClick = (event, link) => {
        event.preventDefault();
        window.location.replace(link);
    };

    return (
        <Container>
            <p>{projectInfo.name}</p>
            <button onClick={(event)=>handleClick(event,projectInfo.github)}>Github</button>
            <button onClick={(event)=>handleClick(event,projectInfo.deployment)}>Deployment</button>
        </Container>
    )
}