import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import '../css/Landing/HeroSection.css'

function HeroSection() {
  const variants = {
     initial: { opacity: 0, scale: .7},
     animation: { opacity: 1, scale: 1}
  }
  return (
    <section className="hero-section">
        <motion.div className="hero-section-content" 
          variants={variants}
          initial='initial'
          animate='animation'
          transition={{ duration: .3}}
        >
            <div className="hero-section-text">
                <h2>Shopify experts <br /> on demand</h2>
                <p>Delegate unlimited Shopify design 
                    and development tasks without the need of hiring freelance or in-house specialists.
                    Fixed monthly subscription. No contracts, cancel anytime.</p>
                <div className="hero-section-content-links">
                    <Link to="#" className='btn-black'>see plans</Link>
                    <Link to="#" className='btn-white'>Book a call</Link>
                </div>
            </div>
        </motion.div>
        <motion.div className="hero-section-img"
           variants={variants}
           initial='initial'
           animate='animation'
           transition={{ duration: .3}}
        >
            <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/621cd454cde99e12747c802e_Task%20explaner.png" alt="" />
        </motion.div>
    </section>
  )
}

export default HeroSection