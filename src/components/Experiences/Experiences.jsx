import React from 'react';
import { Element } from 'react-scroll';
import "./Experiences.css";
import {experiences} from "../../constants/data";

const Experiences = () => {
  return (
    <React.Fragment>
        <Element id='experience' name='experience'>
            <div className='experiences section-p bg-grey' section id = "expriences">
                <div className='container'>
                    <div className='expriences-content'>
                        <div className='section-title'>
                            <h3 className='text-brown'>Experience</h3>
                        </div>
                        <div className='experiences-list grid'>
                            {
                                experiences.map((experience, index) => {
                                    return (
                                        <div className='experiences-item text-center' key = {index}>
                                            <div className='experiences-item-img'>
                                                <img src = {experience.image} className = "mx-auto" alt = ""/>
                                            </div>
                                            <div className='experiences-item-text text-white'>
                                                <h4 className='fs-22 fw-5 op-08'>{experience.title}</h4>        
                                                <ul className='text mx-auto text-white'>
                                                {experience.paragraphs.map((paragraph, i) => (
                                                    <li key={i}>{paragraph}</li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    </React.Fragment>
  )
}

export default Experiences