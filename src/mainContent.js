import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Resume } from './resumePage'
import {ProfilePage} from './profilePage'

import { PortfolioPage } from './portfolioPage'


export class TheContent extends React.Component{
    render(){
        console.log('FROM CONTENT: '+this.props.page);
        if(this.props.page == 'resume'){
            return  <Resume/>
        }else if (this.props.page == 'profilePage'){
            return <ProfilePage/>
        }else if (this.props.page == 'portfolioPage'){
            return <PortfolioPage/>
        }
    }
}