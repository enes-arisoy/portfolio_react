import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from './../AnimatedLetters/index'
import ProfilePhoto from './ProfilePhoto/index'
import { Typewriter } from 'react-simple-typewriter'
import Loader from 'react-loaders'
import "loaders.css/loaders.min.css";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'E', 'n', 'e', 's']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="home-content">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>Hi,</span>

              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m </span>

              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>

            <div className="typewriter-text">
              <Typewriter
                words={[
                  'Frontend Developer',
                  'React Developer',
                  'MERN Stack Developer',
                  'React Native Developer',
                  'Software Developer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>

          <div className="photo-zone">
            <ProfilePhoto />
          </div>
        </div>
      </div>
     <Loader type="ball-triangle-path" />
    </>
  )
}
export default Home
