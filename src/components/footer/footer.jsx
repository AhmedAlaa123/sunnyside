import React  from "react";
import './footer.css'
export default function Footer(props){

    return(
        <footer className='text-center' id='contact-us'>
            <h3>Sunnyside</h3>
            <ul className='navbar-nav m-auto '>
                <li className='nav-item '><span className='nav-link' onClick={()=>props.scrollTo('about')} >About</span></li>
                <li className='nav-item '><span className='nav-link'  onClick={()=>props.scrollTo('services')}>Services</span></li>
                <li className='nav-item'><span className='nav-link' onClick={()=>props.scrollTo('projects')}>Projects</span></li>
            </ul>
            <div className='social-icons'>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com'>
                    <img src='images/icon-facebook.svg'alt='facebook'/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com'>
                    <img src='images/icon-instagram.svg'alt='instagram'/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.twitter.com'>
                    <img src='images/icon-twitter.svg'alt='twitter'/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.pinterest.com'>
                    <img src='images/icon-pinterest.svg'alt='pinterest'/>
                </a>
                
            </div>
        </footer>
    );
}