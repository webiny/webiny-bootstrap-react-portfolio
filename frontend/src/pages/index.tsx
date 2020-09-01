import React, { Component } from 'react';

import About from './about';
import Projects from './projects';
import Home from './home';
import Blogs from './blogs';

import { 
    Container
} from '@material-ui/core';

interface PageProps{
    page: string;
  }
  
export default class MyPages extends Component<PageProps> {

    constructor(props) {
        super(props);
        this.state = {
            '': Home,
            'About': About,
            'Blogs': Blogs,
            'Projects': Projects,
        }
    }

    render() {
        const PageName = this.state[this.props.page || ''];
        return (
            <Container maxWidth='md'>
                <PageName />
            </Container>
        )
    }
}
 