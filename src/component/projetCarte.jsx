import React from 'react';
import {Card,CardActionArea, CardContent, CardActions, CardMedia, Button, Typography}  from '@material-ui/core';


export default function Carte() {
  return (
    <Card style={{maxWidth: "400px"}}>
      <CardActionArea>
        <CardMedia style={{height: "160px"}} image="./david.PNG" title="projet"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">David Lemonade</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{padding : "1.5%", display : 'block', margin : "auto", color : "white", backgroundColor : "rgba(255, 108, 92, 0.75)"}} size="small">En apprendre plus</Button>
      </CardActions>
    </Card>
  );
}