import logo from './logo.svg';
import './App.css';
import NavBar from './navBar.js'
import {Resume} from './resumePage.js'
import {TheContent} from './mainContent'
import React, { useState } from 'react';
import './navBar.css'
import {PortfolioPage} from './portfolioPage.js'

import { send } from 'emailjs-com';
// import { Link, animateScroll as scroll } from "react-scroll";
// import { useState } from 'react';
import{ init } from '@emailjs/browser';
import sendArrow from './sendArrow.png'
// import ScrollAnimation from 'react-animate-on-scroll';
import ScrollAnimation from 'react-animation-on-scroll';

init("ANNdWnd1Kk-RNpuBx");



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
      
      

    <div id='entireWrapper'>

      <div id='contentContainer'>
      
      
      

      
      <div id = 'contentHolder'>
      <section id='stars'>
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
            <button id = 'navButton' onClick={()=>this.changePage('resume')}>Resume</button>
            <button id = 'navButton'onClick={()=>this.changePage('portfolioPage')}>Portfolio</button>

            </div>
            
            
            
            </nav>
      </div>
        
        <div id = 'content'>
        <TheContent page = {this.state.page}/>
        </div>

        </div>
        
      
    </div>

    


    <div id='content2Container' >
      

      
    
    {/* <ScrollAnimation animateIn="bounceIn"> */}
      
    
    <div id='wrapper'>

    
    

    
      <div id='selfDescription'>

        <h3>As a prior veteran I can tell you I understand the definition of hard work,
          and that's exactly what I'm setting out to do. I want to work hard and change the
          world with my code. With that being said, here is s preview of the frameworks,
          languages, and coding principles I'm confident In.
        </h3>
      </div>
      

      <div id='selfSkills'>
        <ul>
          <li>Python</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Javscript</li>
          <li>HTML</li>
        </ul>
      </div>

    
      
      </div>
      {/* </ScrollAnimation> */}
      
    
    </div>

    <div id='content3Container'>
      <div id='test1'>
        
      <SendEmail/>

      </div>
      
      
    
    </div>

    </div>




    </div>
    
  );

}
  
}

export function Content2(){
  
  
  return (
    <div>
      <div>
        <h3>As a prior veteran I can tell you I understand the definition of hard work,
          and that's exactly what I'm setting out to do. I want to work hard and change the
          world with my code. With that being said, here is s preview of the frameworks,
          languages, and coding principles I'm confident In.
        </h3>
      </div>

      <div>
        <ul>
          <li>Python</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Javscript</li>
          <li>HTML</li>
        </ul>
      </div>

    </div>
    
    
  );

}


export function SendEmail(){
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_8icvl2b',
      'template_hs21lvo',
      toSend,
      'ANNdWnd1Kk-RNpuBx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    
    <div id='formContainer'>
      <form onSubmit={onSubmit}>
      <div ><h2 id='emailTitle'> If you would like to contact me, please feel free to react out!</h2></div>
  <input
    type='text'
    name='from_name'
    placeholder='Name'
    value={toSend.from_name}
    onChange={handleChange}
    id='nameInput'
  /><br/>
  <input
    type='text'
    name='reply_to'
    placeholder='Your Email'
    value={toSend.reply_to}
    onChange={handleChange}
    id='emailInput'
  /><br/>
  <textarea
    type='text'
    name='message'
    placeholder='Your Message'
    value={toSend.message}
    onChange={handleChange}
    id='messageInput'
  /><br/>

  
  <button type='submit' id='sendButton'> <img src={sendArrow} alt="" id='sendArrow'/></button>
</form>

      
    </div>
  );

}

  
// App.defaultProps = {page:'profilePage'};
export default App;
