// import logo from './images/logo.svg';
import './App.css';
// import {Resume} from './resumePage.js'
import {TheContent} from './mainContent'
import React, { useState,useRef } from 'react';
// import './navBar.css'
// import {PortfolioPage} from './portfolioPage.js'
// import ScrollToBottom from 'react-scroll-to-bottom';
import { send } from 'emailjs-com';
// import { Link, animateScroll as scroll } from "react-scroll";
// import { useState } from 'react';
import{ init } from '@emailjs/browser';
import sendArrow from './images/sendArrow.png'
import indeedIcon from './images/indeed2.webp'
import instaIcon from './images/insta.png'
import linkedInIcon from './images/linkedin.png'
// import React, { useEffect, useRef } from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
// import ScrollAnimation from 'react-animation-on-scroll';
import Popup from './Popup';
import './Popup.css';
import profilepic4 from './images/profilepic4.jpg'
// import PopupAnimation from 'react-animated-popup'
init("ANNdWnd1Kk-RNpuBx");







class App extends React.Component {

  messagesEndRef = React.createRef()

 
  
  constructor(props) {
    super(props);
    this.state = { page: 'profilePage',popup:0 };
    this.changePage = this.changePage.bind(this);
    // this.myRef = React.createRef();
  }

  // componentDidMount () {
  //   this.scrollToBottom()
  // }
  // componentDidUpdate () {
  //   this.scrollToBottom()
  // }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  

  
  
  
  

changePage(newPage) {
  console.log("CHANGE PAGE");
  this.setState({ page: newPage });
}

togglePopup (){
  console.log('hello')
  this.setState({ popup: 1 });
}



 
// executeScroll = () => this.myRef.current.scrollIntoView()  




  
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
            <button id='navButton' onClick={this.scrollToBottom}>Contact Me</button>
            
            
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

    


    <Content2/>

    <div id='content3Container'>
      <div id='test1'>
        
      <SendEmail/>

      <div ref={this.messagesEndRef} ></div>

      </div>
      
      
    
    </div>

    </div>


    

    </div>
    
    
  );

  

}
  
}

export function Content2(){
  const [visible, setVisible] = useState(false)
  
  return (
    <div id='content2Container' >
      

      
    
    {/* <ScrollAnimation animateIn="bounceIn"> */}
      
    
    <div id='wrapper'>

    
    

    
      <div id='selfDescription'>
      <div id='popupAn'>
        <h3>As a prior veteran I can tell you I understand the definition of hard work,
          and that's exactly what I'm setting out to do. I want to work hard and change the
          world with my code. With that being said, here is s preview of the frameworks,
          languages, and coding principles I'm confident In.
        </h3>
        </div>
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

      <br/>

      </div>
      
      
    
    </div>
    
    
  );

}


 


export function SendEmail(){
  const el1 = useRef();


  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_h9jg5ag',
      'template_nltwc5v',
      toSend,
      'ANNdWnd1Kk-RNpuBx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      togglePopup();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    
    <div  id='formContainer' reference={el1}>
      <form onSubmit={onSubmit}>
      <div ><h2 id='emailTitle'> If you would like to contact me, please feel free to reach out.</h2></div>
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
  
  <br/>



<a href="www.linkedin.com/in/frank-kane-2471b9149"> <img  id='socialMediaPic' src={linkedInIcon} alt="" width="100" height="100"/></a>
  <a href="https://my.indeed.com/p/frankk-xvxytmw"> <img  id='socialMediaPic' src={indeedIcon} alt="" width="100" height="100"/></a>
 <a href="https://www.instagram.com/codingwithkane/"> <img id='socialMediaPic' src={instaIcon} alt="" width="100" height="100"/></a>
 
    
    
    
  
  
</form>
<input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />

{isOpen && <Popup
      content={<>
        <b>Email Sent!</b>
        <p>Thank you so much for your interest in me. I look forward to discussing any future opportunity and will reply as soon as possible. <br/>
        If you would like to send an additional email feel free to contact me at: <br/>fkane01@manhattan.edu </p>
        <img src={profilepic4} alt="" height='200' width='200' id='popupProfilePic' /> <br/>
        <button onClick={togglePopup}>Close</button>
      </>}
      // handleClose={togglePopup}
    />}
      
    </div >
    
  );

}

  
// App.defaultProps = {page:'profilePage'};
export default App;
