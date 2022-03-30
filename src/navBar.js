import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './navBar.css'
import logo from './logo.svg';
//import App from './App'

export default function NavBar(props){

    
   
 

        return <nav>
            
            <div>
            {/* <div id='navButton'><img src={logo} className="App-logo" alt="logo" /></div> */}
            <div id = 'navButton'>RESUME</div>
            <div id = 'navButton'>Portfolio
                {/* <div id = 'navDropDown'>
                    <div>Link1</div>
                    <div>Link1</div>
                    <div>Link1</div>
                    </div> */}
            </div>
            <div id = 'navButton'><a href="https://turing.manhattan.edu/~fkane01/Manhattan_Web_Course/outline.html">Web Programming Projects</a></div>

            </div>
            
            
            
            </nav>
    
}