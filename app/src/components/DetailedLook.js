import React from 'react';
import clsx from 'clsx';
import { 
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import teslahq from './static/tesla-hq.jpg';
import wikilogo from './static/wiki-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgb(37, 36, 35)',
    color: 'white',
    },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function DetailedView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="wiki" src={wikilogo}></Avatar>
        }
        title="Tesla, Inc"
        subheader="Wikipedia Entry"
      />
      <CardMedia
        className={classes.media}
        image={teslahq}

      />
      <CardContent>
        <Typography variant="body2" color="inherit" component="p">
        Tesla, Inc. is an American electric vehicle and 
        clean energy company based in Palo Alto, California.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More info:</Typography>
          <Typography paragraph variant="body2">
            Tesla is ranked as the world's best-selling plug-in and battery
            electric passenger car manufacturer, with a market share of 16%
            of the plug-in segment (which includes hybrids) and 23% of the
            battery electric (purely electric) segment 2020 sales. Through
            its subsidiary SolarCity, Tesla develops and is a major installer
            of solar photovoltaic systems in the United States. Tesla is also 
            one of the largest global suppliers of battery energy storage 
            systems, with 3 GWh of battery storage supplied in 2020. 
          </Typography>
          <Typography paragraph>
            Founded in July 2003 by Martin Eberhard and Marc Tarpenning as 
            Tesla Motors, the company's name is a tribute to inventor and 
            electrical engineer Nikola Tesla. Elon Musk, who contributed 
            most of the funding in the early days, has served as CEO since 
            2008. According to Musk, the purpose of Tesla is to help expedite 
            the move to sustainable transport and energy, obtained through electric vehicles and solar power. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}