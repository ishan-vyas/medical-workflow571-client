import React, {useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PatientInfo from './PatientInfo';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
// import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginLeft: "25%",
    marginRight: "25%",
    margin: "2px",
  },
  media: {
    height: 0,
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
  avatar: {
    backgroundColor: red[500],
  },
  patListLink: {
    
  },
}));

function getInitials(name){
  // Code from https://stackoverflow.com/questions/33076177/getting-name-initials-using-js
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();
  return initials;
};

const PatientItem = React.forwardRef((props, ref) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // console.log(ref.current, 'DoctorPage.js');
  }, []);
  

  return (
    <Link to={`/PatientInfo/${props.pid.toString()}`} >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {getInitials(props.name)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              
            </IconButton>
          }
          title={props.name}
          subheader={props.age}
        />
      </Card>
    </Link>
  );
});

export default PatientItem;
