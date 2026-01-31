import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoE from '../../assets/images/enes_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBriefcase,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoE} alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#00d4ff" />
        </NavLink>
        <NavLink exact="true" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#00d4ff" />
        </NavLink>
        <NavLink exact="true" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faBriefcase} color="#00d4ff" />
        </NavLink>
        <NavLink exact="true" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faCode} color="#00d4ff" />
        </NavLink>
        <NavLink exact="true" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#00d4ff" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/enes-arisoy"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>

        <li>
          <a
            target="blank"
            rel="noreferrer"
            href="https://github.com/enes-arisoy"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
