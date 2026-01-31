import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { motion } from 'framer-motion'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: null,
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['React Native', 'Firebase'],
      image: null,
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      image: null,
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Project 4',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['MERN Stack'],
      image: null,
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Project 5',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['React', 'Redux', 'Express'],
      image: null,
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Project 6',
      description:
        'Project description goes here. You can add details about this project.',
      technologies: ['Vue.js', 'Node.js'],
      image: null,
      github: '#',
      demo: '#',
    },
  ]

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            Here are some of my projects. Click on each project to see more
            details.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🖼️</span>
                    <span>Add Image</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="link-btn github">
                    GitHub
                  </a>
                  <a href={project.demo} className="link-btn demo">
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Projects
