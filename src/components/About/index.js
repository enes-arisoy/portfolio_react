import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faUsers, faCode } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [visitorCount, setVisitorCount] = useState(500)

  useEffect(() => {
    // Visitor counter logic
    const storedVisits = localStorage.getItem('about_visits')
    const currentVisits = storedVisits ? parseInt(storedVisits, 10) : 0
    const newVisits = currentVisits + 1
    localStorage.setItem('about_visits', newVisits.toString())
    setVisitorCount(500 + newVisits)

    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Fullstack Developer with a strong focus on building modern, scalable
            web and mobile applications. I specialize in React, Next.js,
            TypeScript, and Redux, with hands-on experience creating responsive,
            high-performance user interfaces.
          </p>

          <p>
            I actively work with Tailwind CSS, Sass, Firebase, and Git to
            deliver clean, maintainable, and production-ready code. I care
            deeply about clean architecture, scalability, and performance
            optimization, and I have practical experience with testing using
            Jest and efficient data management using TanStack Query.
          </p>
          <p>
            In addition to web development, I have expanded my skill set into
            React Native for cross-platform mobile applications and the MERN
            stack (MongoDB, Express.js, React, Node.js) for full-stack
            solutions, enabling end-to-end feature development and API
            integration. I am a solution-oriented and collaborative developer,
            experienced in working with cross-functional teams and aligning
            technical solutions with business needs. I am open to working in
            international environments and relocation opportunities.
          </p>
        </div>

        <div className="stats-right-container">
          <div className="stats-cards">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FontAwesomeIcon icon={faUsers} className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">{visitorCount}+</span>
                <span className="stat-label">Visitors</span>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <FontAwesomeIcon icon={faCode} className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default About
