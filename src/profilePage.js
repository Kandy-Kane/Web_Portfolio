import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.svg';
import './profilePage.css'
import image from './images/profilepic2.jpg'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { slideInUp } from 'react-animations';
import { fadeInUp } from 'react-animations';
import Appfunctions from './App'



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

// function scrollToBottom() {
//   document.getElementById("content3Container").scroll(0,0)
//   console.log("Contact Me")
// }
 

export function ProfilePage (){


 
  
        return <StyleRoot>
            <div id='txt' >
              
                
                <h3>Hello, my name is</h3>
            <h1 id = 'name' >Frank Kane</h1>
            <h2>Software Developer</h2>
            <h4>I am a professional software developer for web, mobile, integrated, and more!</h4>
            {/* <button onClick={scrollToDiv}>Contact Me</button> */}

                

              </div>  

               <div> 
                 <img id = 'img'  src={image} style={styles.fadeInUp}/>
               </div>
              
                

                


            
                
            
       

        </StyleRoot>
         
    }