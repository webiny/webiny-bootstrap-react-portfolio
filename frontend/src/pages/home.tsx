import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';

import { 
    Container, 
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  title: {
    margin: '20px'
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  loading: {
    color: theme.palette.secondary.main
  },
}));

export default function Home() {
    const classes = useStyles(theme);
    
    return (
        <Container maxWidth='md' className={classes.root}>
            <Typography variant="h3" component="h2" className={classes.title}>
              Webiny Starter React Portfolio
            </Typography>

            <div className={classes.secondary}>
              What is Webiny? Webiny is an open-source framework for building serverless applications. 
              It provides you with developer tools, libraries, ready-made apps and processes. 
              It's built on top of AWS cloud and uses the latest technologies such as NodeJs, React and GraphQL.
            </div>
        </Container>
    )
    
}