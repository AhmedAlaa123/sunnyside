import React from 'react'
import './services.css'
export default function Services(props){

    return(
        <section className='services'>
            <div className='row'>
                <div className='col-md-6 service-desc'>
                    <h2>
                        Transform Your Brand
                    </h2>
                    <p>
                        We Are a full-services creative agency specializing in helping brands grow fast . Engage your clients through compelling visuals that do most if the marketing for you .
                    </p>
                    <a href='#' className='h5'>LEARN MORE</a>

                </div>
                <div className='col-md-6 img '>
                   <img src='https://AhmedAlaa123.github.io/sunnyside/images/main-images/image-transform.jpg' className='img-fluid' alt='Transform imag'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 img'>
                   <img src='https://AhmedAlaa123.github.io/sunnyside/images/main-images/image-stand-out.jpg' className='img-fluid' alt='Stand Out'></img>
                </div>
                <div className='col-md-6 service-desc'>
                    <h2>
                       Stand Out To The right Audience
                    </h2>
                    <p>
                        Using a collaborative formula of desingers , researchers , photographers , vieographers  and copywriter . we'll build and extend your brand in digital places .
                    </p>
                    <a href='#' className='h5'>LEARN MORE</a>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 img' id='services'>
                    <img className='my-pos-relative img-fluid' src='https://AhmedAlaa123.github.io/sunnyside/images/main-images/image-graphic-design.jpg' alt='graphic design'/>
                    <div className='my-pos-abs text-center graphic-design-text'>
                        <h3>
                            Graphic Design
                        </h3>
                        <p>
                            Great design makes you memorable . We deliver artwork that underscores your brand message and captures potential client's attention .
                        </p>
                    </div>
                </div>
            
                <div className='col-md-6 img'>
                    <img className='my-pos-relative img-fluid' src='https://AhmedAlaa123.github.io/sunnyside/images/main-images/image-photography.jpg' alt='photography'/>
                    <div className='my-pos-abs text-center photography-text'>
                        <h3>
                            Photography
                        </h3>
                        <p> 
                            Increase your credibilty by getting the most stunning , high-quality photos that improve your buisness image .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}