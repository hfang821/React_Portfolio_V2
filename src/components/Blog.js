import React from "react";
import { TimelineOppositeContent , TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

export default function Project({ color, blogInfo, num, theme }) {

  return (

    <TimelineItem>
          <TimelineOppositeContent style={{color:'skyblue', lineHeight:'1', fontFamily:'Montserrat'}}>
            <h4 style={{color: 'white', fontFamily: 'Open Sans'}}>{blogInfo.name}</h4>
            <p style={{color: 'white', fontFamily: 'Open Sans'}}>{blogInfo.date}</p>
            <p style={{color: 'white', fontFamily: 'Open Sans'}}>{blogInfo.des2}</p>
            <p style={{color: 'white', fontFamily: 'Open Sans'}}>{blogInfo.location}</p>
            <p>{blogInfo.description}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector style={{height:'250px'}}/>
          </TimelineSeparator>
          <TimelineContent>
                    <a href={blogInfo.link}><img src={blogInfo.icon} style={{width:"50%", borderRadius:"6px"}} alt='blog-demo'></img></a>
          </TimelineContent>
        </TimelineItem>
 
  );
}
