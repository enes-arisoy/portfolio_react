import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobile,
  faCode,
  faServer,
  faTools,
} from '@fortawesome/free-solid-svg-icons'

import reactIcon from '../../assets/images/react-svgrepo-com.svg'
import nextIcon from '../../assets/images/next-black.svg'
import jsIcon from '../../assets/images/js-black.svg'
import tsIcon from '../../assets/images/ts-black.svg'
import htmlIcon from '../../assets/images/html5-black.svg'
import cssIcon from '../../assets/images/css3-black.svg'
import tailwindIcon from '../../assets/images/tailwind-black.svg'
import reduxIcon from '../../assets/images/redux-black.svg'
import reactQueryIcon from '../../assets/images/tanstack-logo-black.svg'
import nodejsIcon from '../../assets/images/nodejs-black.svg'
import expressIcon from '../../assets/images/express-black.svg'
import mongodbIcon from '../../assets/images/mongodb-black.svg'
import gitIcon from '../../assets/images/git-black.svg'
import figmaIcon from '../../assets/images/figma-black.svg'
import postmanIcon from '../../assets/images/postman-black.svg'
import vscodeIcon from '../../assets/images/vscode-black.svg'
import antigravityIcon from '../../assets/images/Google_Antigravity_icon.webp'
import jestIcon from '../../assets/images/jest-black.svg'
import testingIcon from '../../assets/images/testing-library-seeklogo.svg'
import expoIcon from '../../assets/images/expo-black.svg'
import npmIcon from '../../assets/images/npm-black.svg'
import restIcon from '../../assets/images/rest-api-black.svg'
import cursorIcon from '../../assets/images/cursor.svg'
import scssIcon from '../../assets/images/sass-svgrepo-com.svg'
import githubIcon from '../../assets/images/github-black.svg'

import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: faCode,
      skills: [
        { name: 'React.js', image: reactIcon },
        { name: 'Next.js', image: nextIcon },
        { name: 'JavaScript', image: jsIcon },
        { name: 'TypeScript', image: tsIcon },
        { name: 'HTML5', image: htmlIcon },
        { name: 'CSS3', image: cssIcon },
        { name: 'Sass', image: scssIcon },
        { name: 'Tailwind', image: tailwindIcon },
        { name: 'Redux', image: reduxIcon },
        { name: 'TanStack Query', image: reactQueryIcon },
      ],
    },
    {
      title: 'Backend',
      icon: faServer,
      skills: [
        { name: 'Node.js', image: nodejsIcon },
        { name: 'Express.js', image: expressIcon },
        { name: 'MongoDB', image: mongodbIcon },
        { name: 'REST API', image: restIcon },
      ],
    },
    {
      title: 'Mobile',
      icon: faMobile,
      skills: [
        { name: 'React Native', image: reactIcon },
        { name: 'Expo', image: expoIcon },
      ],
    },
    {
      title: 'Tools & Others',
      icon: faTools,
      skills: [
        { name: 'Git', image: gitIcon },
        { name: 'GitHub', image: githubIcon },
        { name: 'Figma', image: figmaIcon },
        { name: 'npm', image: npmIcon },
        { name: 'VS Code', image: vscodeIcon },
        { name: 'Cursor', image: cursorIcon },
        { name: 'Postman', image: postmanIcon },
        { name: 'Antigravity', image: antigravityIcon },
        { name: 'Jest', image: jestIcon },
        { name: 'Testing Library', image: testingIcon },
      ],
    },
  ]

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I develop modern web and mobile applications using MERN Stack and
            React Native. Here are the technologies I work with:
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <div className="category-header">
                <FontAwesomeIcon
                  icon={category.icon}
                  className="category-icon"
                />
                <h2>{category.title}</h2>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.15 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="skill-icon-img"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                    )}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Skills
