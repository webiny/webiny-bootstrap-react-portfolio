import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StarterCard from '../components/card';
import { 
  Grid, 
  Container, 
  Typography,
  CircularProgress
 } from '@material-ui/core'
import theme from '../theme';
// import CircularProgress from '@material-ui/core/CircularProgress'

import { useQuery } from '@apollo/react-hooks';

import { GET_BLOGS } from '../apolloClient/queries';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    loading: {
      color: theme.palette.secondary.main,
      display: 'flex',
      margin: '10%'
    },
    title: {
      margin: '20px'
    },
    description: {
      color: theme.palette.secondary.main,
      margin: '20px'
    },
  }),
);

const Blogs = () => {
  const classes = useStyles(theme);
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) {
    return (
      <Container maxWidth='md' className={classes.loading}>
        <CircularProgress />
      </Container>
    ) 
  }

  if(error) {
    return <p>Error fetching books</p>;
  }

  return (
    <Container maxWidth='md' className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Webiny Blogs
      </Typography>

      <div className={classes.description}>
        What is Webiny? Webiny is an open-source framework for building serverless applications. 
        It provides you with developer tools, libraries, ready-made apps and processes. 
        It's built on top of AWS cloud and uses the latest technologies such as NodeJs, React and GraphQL.
      </div>
      <Grid 
        container 
        spacing={4} 
        direction="row"
        alignItems="center"
      
        className={classes.root}
        justify="center"
        >
        {
          data.listBlogs.data.map((blogs, index) => {
            return (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={6}
                key={index}
              >
                <StarterCard 
                  {...blogs}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
}

export default Blogs;