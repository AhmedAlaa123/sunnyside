import React from 'react'
import './gallary.css'
export default  function Gallary(props){

    return (
        <section className='gallery' id='projects'>
            <div className='row'>
                <div className='col-md-3 col-sm-6 my-col-xs-6'>
                    <img className='img-fluid' src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/main-images/image-gallery-milkbottles.jpg' alt='gallary item'/>
                </div>
                <div className='col-md-3 col-sm-6 my-col-xs-6'>
                    <img className='img-fluid' src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/main-images/image-gallery-orange.jpg' alt='gallary item'/>
                </div>
                <div className='col-md-3 col-sm-6 my-col-xs-6'>
                    <img className='img-fluid' src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/main-images/image-gallery-cone.jpg' alt='gallary item'/>
                </div>
                <div className='col-md-3 col-sm-6 my-col-xs-6'>
                    <img className='img-fluid' src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/main-images/image-gallery-sugarcubes.jpg' alt='gallary item'/>
                </div>
            </div>
        </section>
    );
} 