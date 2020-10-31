import React from 'react';
import {Card,CardActionArea, CardContent, CardActions, CardMedia, Typography}  from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';

export default function Carte(props) {
  return (
    <Zoom>
      <Card style={{maxWidth: "400px"}}>
        <CardActionArea>
          <CardMedia style={{height: "160px"}} image={props.source} title="projet"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign : "center"}}>{props.nom}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{props.txt}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a style={{margin : "15px auto"}} className="myButton" href="#">En apprendre plus</a>
        </CardActions>
      </Card>
    </Zoom>
  );
}