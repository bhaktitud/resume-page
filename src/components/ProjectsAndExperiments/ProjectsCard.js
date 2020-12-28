import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { GitHub, OpenInNew } from '@material-ui/icons'
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import './ProjectsCard.css'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    width:275,
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeReviewCard = ({
  imageUrl, 
  authorImage, 
  authorName, 
  title, 
  timestamp, 
  description, 
  projectLink,
  githubLink 
}) => {
  
  
  const classes = useStyles();

  const openProject = (projectLink) => {
    const win = window.open(projectLink, "_blank");
    win.focus();
  }

  const openGithub = (githubLink) => {
    const win = window.open(githubLink, "_blank");
    win.focus();
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={authorImage} aria-label="project" className={classes.avatar} />
        }
        action={
          <IconButton aria-label="open" onClick={() => openProject(projectLink)}>
            <OpenInNew />
          </IconButton>
        }
        title={<p className='card__title'>{title}</p>}
        subheader={`built ${moment(timestamp, 'MM/DD/YYYY').fromNow()}`}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="open github" onClick={() => openGithub(githubLink)}>
          <GitHub />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default RecipeReviewCard