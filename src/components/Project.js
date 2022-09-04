import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia, Stack, Chip} from '@mui/material';

export default function Project({ color, projectInfo, num, theme }) {
    const handleClick = (event, link) => {
        event.preventDefault();
        window.location.replace(link);
    };

    return ( 
        <Box width='300px' style={{marginTop:'4%', borderRadius:'5px'}}>
            <Card style={{backgroundColor:"LightBlue"}}>
                <CardMedia component='img' height='160' image={projectInfo.icon} alt={projectInfo.name}/>

                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        <i style={{fontFamily:'Montserrat'}}>{projectInfo.name}</i>
                    </Typography>
                    <Typography variant='body2' color='text.secondary' style={{fontFamily:'Open Sans'}}>
                        {projectInfo.description}
                    </Typography>
                </CardContent>

                <Row>
                    {projectInfo.technologies.map((tools) => {
                        return (
                                <Col style={{display: 'inline-block', paddingLeft:'1px'}}>
                                    <Chip label={tools} style={{blockSize:'13px', fontSize:'10px', backgroundColor: "#f5f2ea", fontFamily:'Open Sans', padding:'3px 0px 3px 0px'}} color="primary" variant="outlined" />
                                </Col>
                        )})}
                </Row>

                <CardActions>
                    <Button size='small' style ={{color:'SteelBlue', fontFamily:'Open Sans'}} onClick={(event)=>handleClick(event,projectInfo.github)}>Github</Button> <br></br>
                    <Button size='small' style ={{color:'SteelBlue', fontFamily:'Open Sans'}} onClick={(event)=>handleClick(event,projectInfo.deployment)}>Deployment</Button>
                </CardActions>            
            </Card>
        </Box>
    )
}