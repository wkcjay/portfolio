import "./Skills.css";
import {TbBrandGolang,TbBrandJavascript,TbBrandVscode} from "react-icons/tb";
import {FaHtml5,FaCss3Alt,FaReact,FaDocker,FaAws} from "react-icons/fa";
import {SiSqlite,SiPostgresql,SiKubernetes,SiDatadog,SiPython} from "react-icons/si";
import images from "../../constants/images";
const Skills = () => {
    return (
      <div className='skills section-p' section id = "skills">
          <div className='container'>
              <div className='section-title'>
                  <h3 className='text-brown'>Skills</h3>
              </div>
              <div className='skills-content'>
                <h1 className='skills-language text-dark flex flex-c'>Languages</h1>
                <ul className='skills-language-img flex flex-c'>
                  <li>
                    <TbBrandGolang size = {60} title='Golang'/>
                    <TbBrandJavascript size = {60} title='Javascript'/>
                    <SiPython size={60} title='Python'/>
                    <FaHtml5 size = {60} title='Html5'/>
                    <FaCss3Alt size = {60} title='Css3'/>
                  </li>
                </ul>
                <h1 className='skills-framework text-dark flex flex-c'>Frameworks</h1>
                <ul className='skills-framework-img flex flex-c'>
                  <li>
                    <FaReact size = {60} title='React'/>
                    <img src = {images.gin_gonic} alt = "" title='gin-gonic' style={{width: '50px', height: '70px'}} />
                    <img src = {images.gorilla_mux} alt = "" title='gorilla-mux' style={{width: '60px'}} />
                  </li>
                </ul>
                <h1 className='skills-tool text-dark flex flex-c'>Tools</h1>
                <ul className='skills-tool-img flex flex-c'>
                  <li>
                    <FaDocker size = {60} title='Docker'/>
                    <FaAws size = {60} title='AWS'/>
                    <SiDatadog size = {60} title='Datadog'/>
                    <SiSqlite size = {60} title='Sqlite'/>
                    <SiPostgresql size = {60} title='Postgresql'/>
                    <SiKubernetes size = {60} title='Kubernetes'/>
                    <TbBrandVscode size = {60} title='VS Code'/>         
                  </li>
                </ul>

              </div>
          </div>
      </div>
    )
  }
  
  export default Skills