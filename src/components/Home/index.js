import './index.scss'
import LogoTitle from '../../assets/images/enes-logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from './../AnimatedLetters/index'
import { Loader } from 'react-loaders'
import FloatingLogos from './FloatingLogos/index'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 'e', 's']
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
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m,</span>
            <img src={LogoTitle} alt="developer" />
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
                'Software Developer',
              ]}
              loop={false}
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

        <Loader type="pacman" />
      </div>

      <div className='floating-logos'>
        <FloatingLogos />
      </div>
    </>
  )
}
export default Home
