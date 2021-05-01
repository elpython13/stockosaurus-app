import React from 'react';
import { 
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import muskdance from './static/musk-dance.jpg';

const useStyles = makeStyles({
  root: {
    background: 'rgb(37, 36, 35)',
    color: 'white',
    textPrimary: 'white'
  },
});

export default function NewsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Musk Mania"
          height="168"
          image={muskdance}
          title="Musk Mania"
        />
        <CardContent>
          <Typography gutterBottom="false" variant="h5" color="inherit" component="h2">
            Elon Musk
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
          Elon Reeve Musk FRS (born June 28, 1971) is a business magnate, 
          industrial designer, and engineer.  He is the founder, CEO, CTO, 
          and chief designer of SpaceX; early stage investor, CEO, and product 
          architect of Tesla, Inc.; founder of The Boring Company; co-founder 
          of Neuralink; and co-founder and initial co-chairman of OpenAI.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}