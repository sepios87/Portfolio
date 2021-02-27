import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent,TimelineDot}  from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import '../css/TimeLine.css';

export default function TimeLine() {

  const lineStyle = {background : "rgba(185, 233, 204, 0.9)"}

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>2016-2019</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color : "rgba(255, 108, 92, 0.8)", backgroundColor: "white"}}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector style={lineStyle} />
        </TimelineSeparator>
        <TimelineContent>
        <Paper className="timeLineElement" elevation={3} style={{padding: '5% 8%'}}>
            <h5 style={{fontSize : "100%", margin : 0}}>Lycée Turgot</h5>
            <p>Bac Scientifique Mention Bien</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        <Typography>2019-2021</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color : "rgba(3, 219, 252, 0.7)", backgroundColor: "white"}}>
            <CodeIcon/>
          </TimelineDot>
          <TimelineConnector style={lineStyle} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper className="timeLineElement" elevation={3} style={{padding: '5% 8%'}}>
            <h5 style={{fontSize : "100%", margin : 0}}>IUT Informatique du Limousin</h5>
            <p>Coder, c'est cool.<br/>Développer, c'est mieux !</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{color : "rgba(255, 108, 92, 0.8)", backgroundColor: "white"}}>
            <SupervisedUserCircleIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        <Paper className="timeLineElement" elevation={3} style={{padding: '5% 8%'}}>
            <h5 style={{fontSize : "100%", margin : 0}}>Bientôt en collaboration avec vous !</h5>
            <p>Réalisons vos projets ensemble</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}