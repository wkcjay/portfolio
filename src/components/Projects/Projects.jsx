import React from 'react';
import { Element } from 'react-scroll';
import "./Projects.css";
import {projects} from "../../constants/data";
import { FaGithub} from 'react-icons/fa';

const Projects = () => {
  return (
    <React.Fragment>
        <Element id='projects' name='projects'>
            <div className='projects section-p bg-grey' section id = "projects">
                <div className='container'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Projects</h3>
                    </div>
                    <div className='projects-content'>
                        {
                            projects.map((project, index) => {
                                return (
                                    <div className='card border-0 text-center' key = {index}>
                                        <div className='card-img'>
                                                <img src={project.image} className = "mx-auto" alt = ""></img>
                                        </div>
                                        <div className='card-body'>
                                            <h3 className='card-title'>{project.title}</h3>
                                            <hr />
                                            <p className='card-text'>{project.description}</p>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='media align-items-center'>
                                                <div className='media-body'>
                                                    <h3 className='text-dark'>Links</h3>
                                                </div>
                                                <div className='footerright'>
                                                    <div className='tnlink3'>
                                                        <a href = {project.link} className='text-dark'>
                                                            <FaGithub size = {30} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Element>
    </React.Fragment>
  )
}

export default Projects