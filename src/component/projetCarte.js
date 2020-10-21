import React from 'react';
import {Card,CardActionArea, CardContent, CardActions, CardMedia, Button, Typography}  from '@material-ui/core';


export default function MediaControlCard() {
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
        <Button style={{display : 'block', margin : "auto"}} size="small" color="primary">En apprendre plus</Button>
      </CardActions>
    </Card>
  );
}