import React from "react";
import './App.css'
import About from './components/about/about'
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import Gallary from './components/gallary/gallary'
import Footer from "./components/footer/footer";
import ScrollTopButton from "./components/scroll-top-button/sroll-top-button";

function App() {

 
  return (
    <div className="App">
      <About scrollTo={scrollTo}/>
      <Services/>
      <Testimonials/>
      <Gallary/>
      <Footer scrollTo={scrollTo}/>
      <ScrollTopButton/>
    </div>
  );
}

// this event used to scroll  to section in page by passing id for this section
const scrollTo=(ref)=>{
    const element=document.getElementById(ref);
    element.scrollIntoView({ behavior: 'smooth',block:'start' })
}

export default App;
