import React from 'react'
import NavBar from '../nav-bar/nav-bar'
import './about.css'
const About =(props)=>{
    return(
        <section className='about' id='about'>
            <NavBar scrollTo={props.scrollTo}/>
            <h1 className='about-head'>We Are Creatives</h1>
            <img src='../../images/icon-arrow-down.svg' alt='arrow down'/>
        </section>
    )
}
export default About