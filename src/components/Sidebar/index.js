import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../Assets/images/IMG_0509.PNG'
import LogoSubtitle from '../Assets/images/Untitled-31 01 Artboard 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle}alt="gooden" />
    </Link>

    <nav>

        <NavLink 

            exact="true"
            activeclassname="active" 
            to="/">

        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

        </NavLink>

        <NavLink 

            exact="true"
            activeclassname="active" 
            className="about-link" 
            to="/about"
        >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

        </NavLink>
        <NavLink 

            exact="true"
            activeclassname="active" 
            className="project-link" 
            to="/project"
        >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />

        </NavLink>

        <NavLink 

        exact="true"
        activeclassname="active" 
        className="contact-link" 
        to="/contact">

        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

        </NavLink>

    </nav>

    <ul>
        <li>
            <a target="_blank" rel="nonreferrer" href='https://www.linkedin.com/in/kwuraat/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='nonreferrer' href='https://github.com/Phalco1'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='nonreferrer' href='https://www.tiktok.com/@kwuraat'>
                <FontAwesomeIcon icon={faTiktok} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='nonreferrer' href='https://www.youtube.com/@kwuraat/featured'>
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
        </li>
    </ul>

  </div>
)

export default Sidebar