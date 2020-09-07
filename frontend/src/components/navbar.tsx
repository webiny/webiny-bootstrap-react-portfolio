import React from 'react';
import { 
    createStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core/styles';

import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Divider
} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import MyIcons from './icons';

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        flexShrink: 0,
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      link: { 
        textDecoration: 'none', 
        color: theme.palette.text.primary 
      },
      webinyLink: {
        textDecoration: 'none', 
        color: theme.palette.text.secondary,
        width: '100%'
      }
    })
)

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <CssBaseline />
          <Drawer 
            className={classes.drawer}
            open={true}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
          >
              <List style={{ height: '100%' }}>
                {['About', 'Blogs', 'Projects'].map((text, index) => {
                    return (
                        <Link to={'/'+text.toLowerCase()} className={classes.link} key={index}>
                            <ListItem button>
                                <ListItemIcon>
                                    <MyIcons icon={text} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                        )
                    }
                )}
                <a 
                  href='https://webiny.com/serverless-app/headless-cms' 
                  className={classes.webinyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ position: 'absolute', bottom: 0 }}
                >
                  <Divider light />
                    <ListItem>
                      <ListItemIcon>
                          <img src={logo} width='25' alt="webiny" />
                      </ListItemIcon>
                      <ListItemText primary={'Webiny Headless CMS'} />
                    </ListItem>
                </a>
              </List>
              <Divider light />
            </Drawer>
        </div>
    )
}