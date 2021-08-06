import React from "react";
import './nav-bar.css'
const NavBar=(props)=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark "  >
        <div className="container">
            <a href="#home" className="navbar-brand">Sunnyside</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
        
                    <li className="nav-item">
                        <span className="nav-link" href="#about" onClick={()=>props.scrollTo('about')}>ِAbout</span>
                    </li>
        
                    <li className="nav-item">
                        <span className="nav-link" href="services" onClick={()=>props.scrollTo('services')}>Services</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link"  onClick={()=>props.scrollTo('projects')}>Projects</span>
                    </li>
                    <li className="nav-item active">
                        <span className="nav-link" onClick={()=>props.scrollTo('contact-us')}>Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default NavBar