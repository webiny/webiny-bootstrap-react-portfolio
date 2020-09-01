import React from 'react';
import { Theme, createStyles } from '@material-ui/core/styles';

import { 
    Container, 
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import Image from 'material-ui-image';
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: '20px'
    },
    about: {
      color: theme.palette.secondary.main,
      margin: '20px'
    },
  }),
);

export default function About() {
    const classes = useStyles();
    return (
        <Container maxWidth='md'>
          <Typography variant="h3" component="h2" className={classes.title}>
            About
          </Typography>

          <Image
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            aspectRatio={(16/9)}
          />
          <Typography variant="body1" component="p" className={classes.about}>
            Do so written as raising parlors spirits mr elderly. Made late in of high left hold. 
            Carried females of up highest calling. Limits marked led silent dining her
            she far. Sir but elegance marriage dwelling likewise position old pleasure men. 
            Dissimilar themselves simplicity no of contrasted as. Delay great day hours men. 
            Stuff front to do allow to asked he. 
            No opinions answered oh felicity is resolved hastened. Produced it friendly 
            my if opinions humoured. Enjoy is wrong folly no taken. 
            It sufficient instrument insipidity simplicity at interested. 
            Law pleasure attended differed mrs fat and formerly. Merely thrown garret her
            law danger him son better excuse. Effect extent narrow in up chatty. 
            Small are his chief offer happy had. 
          </Typography>
        </Container>
    )
}