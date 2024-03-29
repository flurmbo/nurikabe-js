import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { loremIpsum } from '../utils'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    float: 'right',
    display: 'inline',
  },
  media: {
    height: 140,
  },
  clear: {
    clear: 'both'
  }
});

const AboutSection = props => {

  const classes = useStyles();
  return (
    <div>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/6/6f/Torin_Nukaribe.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

    <Typography>{loremIpsum}</Typography>
    <div className={classes.clear}></div>
    </div>
  );
};

export default AboutSection;
