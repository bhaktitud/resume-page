import React from 'react'
import './Educations.css'
import data from '../../eduandwork.json'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { School, Work } from '@material-ui/icons';
import { Avatar, Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    minHeight: 150,
    // height: 250
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    width:350,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  subtitle:{
    fontSize:15
  },
  pos: {
    marginBottom: 12,
  },
  years: {
      fontWeight: 'bold'
  }
}));

function Educations() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className='educations'>
            <h1>Education and Job History</h1>
            <Timeline align="alternate" className='timeline'>
                {
                    data?.map((item, i) => (
                        
                        <TimelineItem key={i} className='timeline__item' >
                            <TimelineOppositeContent>
                            <Typography className={classes.years} variant="body2" color="textSecondary">
                                {item.years}
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant='outlined'>
                                {item.type === 'school' && <School />}
                                {item.type === 'job' && <Work />}
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper} >
                                <div className='timeline_paperTop'>
                                    <Avatar src={item.logo} />
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {item.placeName}
                                    </Typography>
                                </div>
                                <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                    {item.major}
                                </Typography>
                                <Typography className='timeline_itemDescription'>{item.description}</Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>

                    ))
                }
            </Timeline>
        </div>
    )
}

export default Educations
