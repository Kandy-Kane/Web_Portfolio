import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './resumePage.css'
import logo from './images/logo.svg';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { slideInUp } from 'react-animations';
import { fadeInUp } from 'react-animations';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  slideInUp:{
    animation: 'x 0.5s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')

  },
  fadeInUp:{
    animation: 'x 0.5s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')

  }
}
 // ES6
//var ReactCSSTransitionGroup = require('react-transition-group');

export class Resume extends React.Component{
    render(){
        return <StyleRoot id = 'pdf'>
            <div id = 'pdf' style={styles.fadeInUp}>
            <iframe src="https://drive.google.com/file/d/1JkXPXDtWaw4J5YW8BgUJ7FBIXwGncdty/preview" width="100%" height="100%" allow="autoplay"></iframe>
        
        </div>

        </StyleRoot>
         
    }
}