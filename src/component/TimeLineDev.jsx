import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent,TimelineDot}  from '@material-ui/lab';
import {Paper, Typography} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function TimeLine() {

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
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding: '3%'}}>
            <h5>Lycée Turgot</h5>
            <p>Bac Scientifique Mention Bien.</p>
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
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding: '3%'}}>
            <h5>IUT Informatique du Limousin</h5>
            <p>Coder, c'est cool; développer, c'est mieux !</p>
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
          <Paper elevation={3} style={{padding: '4%'}}>
            <h5>Bientôt en collaboration avec vous !</h5>
            <p>Réalisons vos projets ensemble</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}