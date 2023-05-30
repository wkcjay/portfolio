import React from 'react';
import { Element } from 'react-scroll';
import "./About.css";
import images from "../../constants/images";

const About = () => {

  return (
    <React.Fragment>
        <Element id='about' name='about'>
            <div className='about section-p'>
                <div className='container'>
                    <div className='about-content'>
                        <div className='about-grid grid'>
                            <img src = {images.About_KC} alt = "" className='about-img mx-auto' />
                            <div className='section-title'>
                                <h3 className='text-brown'>I'm <span className='text-dark'>Khia Chen</span></h3>
                                <p className='text mx-auto' style={{ textAlign: 'justify' }}>
                                    I am excited to bring my problem-solving skills and passion for technology 
                                    to tackle any problem. My strong passion for technology drives me to constantly learn and improve. 
                                    I am eager to make meaningful contributions to any team I join.
                                    <br /><br />
                                    Graduated with Honours (Merit) in Mechanical Engineering from NTU
                                    <br /><br />
                                    Currently open to new opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    </React.Fragment>    
  )
}

export default About