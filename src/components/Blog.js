import React from "react";
import { TimelineOppositeContent , TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

export default function Project({ color, blogInfo, num, theme }) {

  return (

    <TimelineItem>
          <TimelineOppositeContent style={{color:'white', lineHeight:'1'}}>
            <h4>{blogInfo.name}</h4>
            <p>{blogInfo.date}</p>
            <p>{blogInfo.des2}</p>
            <p>{blogInfo.location}</p>
            <p>{blogInfo.description}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector style={{height:'250px'}}/>
          </TimelineSeparator>
          <TimelineContent>
                    <a href={blogInfo.link}><img src={blogInfo.icon} style={{width:"45%"}} alt='blog-demo'></img></a>
          </TimelineContent>
        </TimelineItem>
 
  );
}
