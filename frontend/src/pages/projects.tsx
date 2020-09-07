import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StarterCard from '../components/card';
import { 
  Grid,
  Container,
  Typography
 } from '@material-ui/core'
 import CircularProgress from '@material-ui/core/CircularProgress';
 
 import { useQuery } from '@apollo/react-hooks';

 import { GET_PROJECTS } from '../apolloClient/queries';
 import theme from '../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: 200
    },
    loading: {
      color: theme.palette.secondary.main,
      display: 'flex',
      margin: '10%'
    },
    description: {
      color: theme.palette.secondary.main,
      margin: '20px'
    },
    title: {
      margin: '20px'
    },
  }),
);

const ProjectCard = () => {

  const classes = useStyles(theme);
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return  (
        <Container maxWidth='md' className={classes.loading}>
          <CircularProgress />
        </Container>
      )
  }
  
  if(error) {
    return <p>Error fetching projects</p>;
  }

  return (
    <Container maxWidth='md' className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Webiny Projects
      </Typography>
      <div className={classes.description}>
        What is Webiny? Webiny is an open-source framework for building serverless applications. 
        It provides you with developer tools, libraries, ready-made apps and processes. 
        It's built on top of AWS cloud and uses the latest technologies such as NodeJs, React and GraphQL.
      </div>
      <Grid 
        container 
        spacing={4} 
        className={classes.root}
        justify="center"
        >
        {
          data.listProjects.data.map((projects, index) => {
            return (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={6}
                key={index}
              >
                <StarterCard 
                  {...projects}
                  />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
}

export default ProjectCard;