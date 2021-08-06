import React from 'react';
import './testimonials.css';

export default function Testimonials()
{
    return (
        <section className='testimonials text-center'>
            <h2 >CLIENTS TESTIMONIALS</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <img src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/image-emily.jpg' alt='Emily R.'/>
                    <p>
                        We put our trust in Sunyside and they deliverd , making sure our needs were met and deadlines were always hit.
                    </p>
                    <h4>Emily R.</h4>
                    <p className='jop'>Marketing Director</p>
                </div>
                <div className='col-md-4'>
                    <img src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/image-thomas.jpg' alt='Thomas S.'/>
                    <p>
                        Sunnyside's enthusiasm coupled with thier keen interest in our brand's success made it a satisfying and enjoyable experience.
                    </p>
                    <h4>Thomas S.</h4>
                    <p className='jop'>Chief Operating Officer</p>
                </div>
                <div className='col-md-4'>
                    <img src='https://AhmedAlaa123.github.io/sunnyside-agency-landing-page/images/image-jennie.jpg' alt='Jennie F.'/>
                    <p>
                        Incredible end result! Our Sales increased over 400&#37; when we worked with Sunnyside.Highly recommended!
                    </p>
                    <h4>Jennie F.</h4>
                    <p className='jop'>Bussiness Owner</p>
                </div>
            </div>
        </section>
    );
}