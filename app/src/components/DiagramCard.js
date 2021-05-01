import diagram from "./static/stocko-big.jpg";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "55vw",
    maxWidth: '85vw',
    minHeight: '60vh',
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
  },
});

export default function DiagramCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="375"
          image={diagram}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            stockosaurus architecture
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            Stack: React, Django, Postgresql
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}