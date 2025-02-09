import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia, Chip} from '@mui/material';

export default function Project({ projectInfo }) {
    const handleClick = (event, link) => {
        event.preventDefault();
        window.location.replace(link);
    };

    return ( 
        <Box width='300px' style={{marginTop:'4%', borderRadius:'7px'}} className="box">
            <Card style={{backgroundColor:"LightBlue"}}>
                <CardMedia component='img' height='160' image={projectInfo.icon} alt={projectInfo.name}/>
                <div className="content">
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        <i style={{fontFamily:'Montserrat'}}>{projectInfo.name}</i>
                    </Typography>
                    <Typography variant='body2' color='text.secondary' style={{fontFamily:'Open Sans'}}>
                        {projectInfo.description}
                    </Typography>
                </CardContent>

                <Row style={{marginLeft:"-2px"}}>
                    {projectInfo.technologies.map((tools) => {
                        return (
                                <Col style={{display: 'inline-block', paddingLeft:'1px'}}>
                                    <Chip label={tools} style={{blockSize:'13px', fontSize:'10px', backgroundColor: "transparent", fontFamily:'Open Sans', borderColor:'white', padding:'5px 0px 5px 0px', height:'20px', marginLeft:"7px", borderWidth:'1px'}} color="primary" variant="outlined" />
                                </Col>
                        )})}
                </Row>

                <CardActions>
                    <Button size='small' style ={{color:'SteelBlue', fontFamily:'Open Sans'}} onClick={(event)=>handleClick(event,projectInfo.github)}>Github</Button> <br></br>
                    {projectInfo.deployment ? <Button size='small' style ={{color:'SteelBlue', fontFamily:'Open Sans'}} onClick={(event)=>handleClick(event,projectInfo.deployment)}>Deployment</Button> : 
                        <Typography variant='p' color='text.secondary' style={{fontFamily:'Open Sans', fontSize: '0.75rem', marginLeft: '4rem', color: 'white'}}>
                            *Site is under construction
                        </Typography>
                    }
                </CardActions>   
                </div>
            </Card>
        </Box>
    )
}