import logo from './logo.svg';
import './App.css';
import NavBar from './navBar.js'
import {Resume} from './resumePage.js'
import {TheContent} from './mainContent'
import React, { useState } from 'react';
import './navBar.css'
import {PortfolioPage} from './portfolioPage.js'


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { page: 'profilePage' };
    this.changePage = this.changePage.bind(this);
  }
  
  


changePage(newPage) {
  
  this.setState({ page: newPage });
}

  
render(){


  return (
    <div className="App">
      <div id='contentContainer'>

      
      <div id = 'contentHolder'>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
    </section>

      

      <div id = 'navbar'>
      <nav>
            
            <div>
            {/* <div id = 'navButton'><img src={logo} className="App-logo" alt="logo" /></div> */}
            <button id='FK' onClick={()=>this.changePage('profilePage')}>FK</button>
            
            
            <a href="https://turing.manhattan.edu/~fkane01/Manhattan_Web_Course/outline.html" target="_blank"><button id = 'navButton'>Manhattan College Web Course</button></a>
            <button id = 'navButton' onClick={()=>this.changePage('resume')}>RESUME</button>
            <button id = 'navButton'onClick={()=>this.changePage('portfolioPage')}>Portfolio</button>

            </div>
            
            
            
            </nav>
      </div>
        
        <div id = 'content'>
        <TheContent page = {this.state.page}/>
        </div>

        </div>
        
      
    </div>


    <div id='content2Container'>

    </div>




    </div>
  );

}
  
  
  
}

  
// App.defaultProps = {page:'profilePage'};
export default App;
