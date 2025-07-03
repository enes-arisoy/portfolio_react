import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './index.scss';
import reactLogo from '../../../assets/images/react-1-logo-svg-vector.svg';
import jsLogo from '../../../assets/images/js-official-svgrepo-com.svg';
import nextLogo from '../../../assets/images/next-js-icon-seeklogo.svg';
import reduxLogo from '../../../assets/images/redux-logo-svg-vector.svg';
import testingLogo from '../../../assets/images/testing-library-seeklogo.svg';
import tailwindLogo from '../../../assets/images/tailwind-svgrepo-com.svg';
import tsLogo from '../../../assets/images/typescript-icon-svgrepo-com.svg';
import figmaLogo from '../../../assets/images/figma-svgrepo-com.svg';


const logos = [
  { src: reactLogo, alt: 'React' },
  { src: jsLogo, alt: 'JavaScript' },
  { src: nextLogo, alt: 'Next' },
  { src: reduxLogo, alt: 'Redux' },
  { src: testingLogo, alt: 'Testing' },
  { src: tailwindLogo, alt: 'Tailwind' },
  { src: tsLogo, alt: 'TypeScript' },
  { src: figmaLogo, alt: 'Figma' },
];

function getRandomPosition() {
  return {
    x: Math.random() * 80, 
    y: Math.random() * 80  
  };
}

function FloatingLogos() {
  const [positions, setPositions] = useState(logos.map(() => getRandomPosition()));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(logos.map(() => getRandomPosition()));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-logos">
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="logo"
          animate={{
            x: `${positions[index]?.x}vw`,
            y: `${positions[index]?.y}vh`
          }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default FloatingLogos;
