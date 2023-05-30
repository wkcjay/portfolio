import { useState } from 'react'
import "./Navbar.css";
import {Link as ScrollLink } from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
    const[navToggler, setNavToggler] = useState(false);
    const closeNavBar = () => setNavToggler(false);
        
        return (
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-content'>
                        <div className='brand-and-toggler flex flex-sb'>
                            <ScrollLink to = "home" spy={true} smooth={true} duration={500} activeClass='some-active-class' className='navbar-brand text-uppercase text-white fw-7 ls-2 fs-22' style={{width: "450px"}}>Wong Khia Chen</ScrollLink>
                            <button type="button" className='navbar-open-btn text-white' onClick={() => setNavToggler(!navToggler)}>
                                <FaBars size = {30} />
                            </button>
                            
                            <div className={navToggler ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                                <button type="button" className='navbar-close-btn text-white' onClick={closeNavBar}>
                                    <FaTimes size = {30} />
                                </button>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <ScrollLink to = "about" 
                                    spy={true} smooth={true} duration={500} activeClass='some-active-class' 
                                    className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'
                                    onClick={closeNavBar}
                                    >
                                        About
                                    </ScrollLink>
                                </li>
                                <li className='nav-item'>
                                    <ScrollLink to = "experience" 
                                    spy={true} smooth={true} duration={500} activeClass='some-active-class' 
                                    className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'
                                    onClick={closeNavBar}
                                    >
                                        Experience
                                    </ScrollLink>
                                </li>
                                <li className='nav-item'>
                                    <ScrollLink to = "skills" 
                                    spy={true} smooth={true} duration={500} activeClass='some-active-class' 
                                    className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'
                                    onClick={closeNavBar}
                                    >
                                        Skills
                                    </ScrollLink>
                                </li>
                                <li className='nav-item'>
                                    <ScrollLink to = "projects" 
                                    spy={true} smooth={true} duration={500} activeClass='some-active-class' 
                                    className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'
                                    onClick={closeNavBar}
                                    >
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li className='nav-item'>
                                    <ScrollLink to = "follow" 
                                    spy={true} smooth={true} duration={500} activeClass='some-active-class' 
                                    className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'
                                    onClick={closeNavBar}
                                    >
                                        Follow
                                    </ScrollLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }  

export default Navbar