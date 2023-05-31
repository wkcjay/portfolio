import React from 'react';
import { Element } from 'react-scroll';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <React.Fragment>
            <Element id='home' name='home'>
                <div className='header flex flex-col' id="header">
                    <Navbar />
                    <div className='container flex'>
                        <div className='header-content'>
                            <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Backend developer</h2>
                            <h1 className='text-white fw-6 header-title'>Hello, I'm <span 
                            className='text-brown'>Backend Developer</span> living in Singapore</h1>
                            <div className='btn-groups flex'>
                                <button type="button" className='btn-item bg-brown fw-4 ls-2'>
                                    <a href="https://drive.google.com/file/d/1c1hPZhGdlX2TUQdAHzC-UeO5A-0G-Izb/view?usp=share_link">My Resume</a>
                                </button>
                                <button type="button" className='btn-item bg-dark fw-4 ls-2'>
                                    <a href="mailto:wkcjay@gmail.com">Contact Me</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </React.Fragment>
        
    )
}

export default Header