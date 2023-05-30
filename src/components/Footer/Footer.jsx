import React from 'react';
import { Element } from 'react-scroll';
import "./Footer.css";
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <React.Fragment>
        <Element id='follow' name='follow'>
            <div className='footer bg-dark section-p' id = "footer">
                <div className='container'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Follow <span className='text-white'>Me</span></h3>
                    </div>
                    <div className='footer-content'>
                        <ul className='footer-social-links flex flex-c'>
                            <li>
                                <a href = "https://github.com/wkcjay" className='text-white'>
                                    <FaGithub size = {30} />
                                </a>
                            </li>
                            <li>
                                <a href = "https://www.linkedin.com/in/wong-khia-chen/" className='text-white'>
                                    <FaLinkedin size = {30}/>
                                </a>
                            </li>
                        </ul>
                        <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2023</p>
                    </div>
                </div>
            </div>
        </Element>
    </React.Fragment>
  )
}

export default Footer