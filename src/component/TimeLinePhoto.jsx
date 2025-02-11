import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent,TimelineDot}  from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import '../css/TimeLine.css';

export default function TimeLine() {

  const lineStyle = {background : "rgba(185, 233, 204, 0.9)"}

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography>2014</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color : "rgba(255, 108, 92, 0.8)", backgroundColor: "white"}}>
            <EmojiNatureIcon />
          </TimelineDot>
          <TimelineConnector style={lineStyle} />
        </TimelineSeparator>
        <TimelineContent>
        <Paper className="timeLineElement" elevation={3} style={{padding: '5% 8%'}}>
            <h5 style={{fontSize : "100%", margin : 0}}>Décourverte de la photographie</h5>
            <p>A travers la nature, les fleurs et les paysages, la photo commence à me passionner</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        <Typography>2017</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{color : "rgba(3, 219, 252, 0.7)", backgroundColor: "white"}}>
            <PhotoCameraIcon/>
          </TimelineDot>
          <TimelineConnector style={lineStyle} />
        </TimelineSeparator>
        <TimelineContent>
        <Paper className="timeLineElement" elevation={3} style={{padding: '5% 8%'}}>
            <h5 style={{fontSize : "100%", margin : 0}}>Premier concours photo remporté !</h5>
            <p>Primé à l'ASMA et par la même occasion, je me lance dans la photographie de portraits</p>
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
            <h5 style={{fontSize : "100%", margin : 0}}>Attention, souriez !</h5>
            <p>Vous allez bientôt avoir de belles photos de vous</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}