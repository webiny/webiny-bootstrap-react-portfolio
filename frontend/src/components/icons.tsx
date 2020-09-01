import React, { Component } from 'react';

import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import WebIcon from '@material-ui/icons/Web';

interface IconProps{
    icon: string;
  }
  
export default class MyIcons extends Component<IconProps> {

    constructor(props: IconProps) {
        super(props);
        this.state = {
            'About': InfoIcon,
            'Blogs': BookIcon,
            'Projects': WebIcon
        }
    }

    render() {
        const IconName = this.state[this.props.icon || 'About'];
        return (
            <IconName />
        )
    }
}
 