import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.svg';
import './portfolioPage.css'
import image from './images/profilepic2.jpg'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { slideInUp } from 'react-animations';
import { fadeInUp } from 'react-animations';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import newBook from './images/newBook.png'
import airForceLogo from './images/airforce.png'
import momaLogo from './images/moma.webp'
import projectJojoLogo from './images/projectjojo.webp'
import manhattanCollegeLogo from './images/manhattancollege.jpg'
import codingBackground from './images/codingBackground2.jpg'
import video from './schedulerDemo.mp4'



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
 

export class PortfolioPage extends React.Component{
    render(){
        return <StyleRoot>
                <div style={styles.fadeInUp}>
            <BasicTabs/>
                
            
        </div>
        </StyleRoot>
        

        
         
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box id='setBorderRadius'>
        <Box id='tabHolder'>
          <Tabs   value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Project 1" {...a11yProps(0)}/>
            <Tab label="Project 2" {...a11yProps(1)} />
            <Tab label="Project 3" {...a11yProps(2)} />
            <Tab label="Project 4" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
          <ExcelScheduler />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MoMaProject/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectJoJo/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Capstone/>
        </TabPanel>
      </Box>
    );
  }

function ExcelScheduler(){
      return(
          
          <div id='container'>
              
              <div id='container-background'></div>
<div id='content' >

              <table id='title'>
                  <tr><h1>Excel Programatic Scheduler</h1></tr>
                  <tr><img src={airForceLogo} alt="" id='airforceLogo'/></tr>
              </table>
              
              <h3 id='paragraph'>This was actually a favor to a friend of mine in the Air Force. He needed a light weight program
                   that could autopopulate an excel file with their schedule from either handjammed dates, or another excel file.
                   </h3>
                   <img src={newBook} alt="" id='excelSchedulerImg'/>
                   <h3 id='paragraph'>This program is made entirely with Python and python libraries. Because this program couldn't access the 
                       internet in any way due to security protocols, it forced me to learn quite a bit on file directories, designers 
                       for desktop apps such as PyQy Designer, and building complete .exe files.
                       </h3>
                       <img src={newBook} alt="" id='excelSchedulerImg'/>
                       <h3 id='paragraph'>One of my proudest moments with this program was learning and finally implimenting active loading bars and notifications within the app. </h3>
                       <img src={newBook} alt="" id='excelSchedulerImg'/>
                       <h3 id='paragraph'>If you would like to see how this program works here is a demo video explaining the functionality. Alternatively 
                           you can click the link at the bottom and download the src code, and run the provided .exe file.</h3>

                           <div id = 'video'>
                           <video width="750" height="500"  controls >
      <source src={video} type="video/mp4"  />
</video>

                           </div>
                           
                           
                        <a href="https://github.com/Kandy-Kane/curtis_program" target="_blank"><h5 id='githubLink'>Github Link</h5></a>
                        <a href="https://github.com/Kandy-Kane/curtis_program/archive/refs/heads/master.zip" download><h5 id='githubLink'>Github Repo Download</h5></a>
                   </div>
          </div>
          

      )
  }

  function MoMaProject(){
    return(
        
        <div id='container'>
            
            <div id='container-background'></div>
<div id='content' >

            <table id='title'>
                <tr><h1>MoMa Mapreduce Project</h1></tr>
                <tr><img src={momaLogo} alt="" id='momaLogo'/></tr>
            </table>
            
            <h3 id='paragraph'>This was one of my first major projects at Manhattan College 
                 </h3>
                 <img src={newBook} alt="" id='excelSchedulerImg'/>
                 <h3 id='paragraph'>This program was centralized around using kubernete clusters to process big data faster. Our project analyzes every single piece 
                 of the Mueseum of Modern Art and compiles interesting information such as the most common age of the artists. 
                     </h3>
                     <img src={newBook} alt="" id='excelSchedulerImg'/>
                     <h3 id='paragraph'>Kubernetes along with using Linux for the first time was definitely a challenge, however, proved to be useful with processing data faster. </h3>
                     <img src={newBook} alt="" id='excelSchedulerImg'/>
                     <h3 id='paragraph'>Here is a powerpoint describing our program, and how it works.</h3>

                         <div id = 'video'>
                         <video width="750" height="500"  controls >
    <source src={video} type="video/mp4"  />
</video>

                         </div>
                         
                         
                      <a href="https://github.com/Kandy-Kane/curtis_program" target="_blank"><h5 id='githubLink'>Github Link</h5></a>
                      <a href="https://github.com/Kandy-Kane/curtis_program/archive/refs/heads/master.zip" download><h5 id='githubLink'>Github Repo Download</h5></a>
                 </div>
        </div>
        

    )
}

function ProjectJoJo(){
  return(
      
      <div id='container'>
          
          <div id='container-background'></div>
<div id='content' >

          <table id='title'>
              <tr><h1>Project JoJo+</h1></tr>
              <tr><img src={projectJojoLogo} alt="" id='projectJojoLogo'/></tr>
          </table>
          
          <h3 id='paragraph'>This was supposed to be a joke app conjured up from a friend to teach myself mobile programming, however, after uploading
          it to the google play store it has now reached 13k downloads.
               </h3>
               <img src={newBook} alt="" id='excelSchedulerImg'/>
               <h3 id='paragraph'>This program is made entirely Flutter which is Googles competator to React. Flutter looks and feels like HTML,CSS, and
               Javascript all in one. It has turned into my favorite mobile development platform. 
                   </h3>
                   <img src={newBook} alt="" id='excelSchedulerImg'/>
                   <h3 id='paragraph'>This app offers sounds, videos, transitions, interactivity, all things I did not know how to do at first on 
                   the mobile platform. </h3>
                   <img src={newBook} alt="" id='excelSchedulerImg'/>
                   <h3 id='paragraph'>Below is the google play store link to download the app along with the github repo.</h3>

                       <div id = 'video'>
                       <video width="750" height="500"  controls >
  <source src={video} type="video/mp4"  />
</video>

                       </div>
                       
                       
                    <a href="https://github.com/Kandy-Kane/curtis_program" target="_blank"><h5 id='githubLink'>Github Link</h5></a>
                    <a href="https://github.com/Kandy-Kane/curtis_program/archive/refs/heads/master.zip" download><h5 id='githubLink'>Github Repo Download</h5></a>
               </div>
      </div>
      

  )
}

function Capstone(){
  return(
      
      <div id='container'>
          
          <div id='container-background'></div>
<div id='content' >

          <table id='title'>
              <tr><h1>Capstone</h1></tr>
              <tr><img src={manhattanCollegeLogo} alt="" id='manhattanCollegeLogo'/></tr>
          </table>
          
          <h3 id='paragraph'>This project was the culmuination of my coding career in college. We were a team of four who had developed a roommate
          finder for our own college.
               </h3>
               <img src={newBook} alt="" id='excelSchedulerImg'/>
               <h3 id='paragraph'>This program was also entirely made from Flutter, but extended the complexity to several different plugins, dependencies,
               google analytics, and much more. 
                   </h3>
                   <img src={newBook} alt="" id='excelSchedulerImg'/>
                   <h3 id='paragraph'>This was my first attempt at login/sign up functionality, and if you are making something custom not boxed together in a dependency, I can tell You
                   it is a very involved process. </h3>
                   <img src={newBook} alt="" id='excelSchedulerImg'/>
                   <h3 id='paragraph'>Here is the projects github repo along with a video showcasing the application.</h3>

                       <div id = 'video'>
                       <video width="750" height="500"  controls >
  <source src={video} type="video/mp4"  />
</video>

                       </div>
                       
                       
                    <a href="https://github.com/Kandy-Kane/curtis_program" target="_blank"><h5 id='githubLink'>Github Link</h5></a>
                    <a href="https://github.com/Kandy-Kane/curtis_program/archive/refs/heads/master.zip" download><h5 id='githubLink'>Github Repo Download</h5></a>
               </div>
      </div>
      

  )
}