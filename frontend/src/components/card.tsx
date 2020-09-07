import React from 'react';

import { 
  makeStyles, 
  createStyles, 
  Theme
} from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 251,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);


export default function StarterCard({...pro}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" >
            {pro.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           {pro.subtitle}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <CardActions>
            {/* <Button size="small" color="primary">
              {pro.cta}
            </Button> */}
            <Button size="small" color="primary" href={pro.link} target="_blank">
              Learn more
            </Button>
          </CardActions>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={pro.cover}
        title={pro.title}
      />
    </Card>
  );
}