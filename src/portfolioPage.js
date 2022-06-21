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
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
          <ExcelScheduler />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
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