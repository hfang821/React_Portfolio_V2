import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia} from '@mui/material';

export default function Project({ color, projectInfo, num, theme }) {
    const handleClick = (event, link) => {
        event.preventDefault();
        window.location.replace(link);
    };

    return ( 
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140' image={projectInfo.icon} alt={projectInfo.name}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        {projectInfo.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {projectInfo.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' onClick={(event)=>handleClick(event,projectInfo.github)}>Github</Button> <br></br>
                    <Button size='small' onClick={(event)=>handleClick(event,projectInfo.deployment)}>Deployment</Button>
                </CardActions>
            </Card>
        </Box>
    )
}