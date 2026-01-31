import { motion } from 'framer-motion'
import './index.scss'
import HeroImage from '../../../assets/images/Hero.png'

const ProfilePhoto = () => {
  return (
    <div className="profile-photo-container">
      <motion.div
        className="profile-photo-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="profile-photo-glow"
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 215, 0, 0.3)',
              '0 0 40px rgba(255, 215, 0, 0.5)',
              '0 0 20px rgba(255, 215, 0, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="profile-photo"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="photo-placeholder">
            <img src={HeroImage} alt="Hero" />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="decoration decoration-1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="decoration decoration-2"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default ProfilePhoto
