import React from 'react'
import { FiYoutube, FiTool, FiSend } from "react-icons/fi"
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import '../css/Landing/Section2.css'

function Section2() {
  const variants = {
     initial: {scale: 1},
     visible: {scale: 1.1}
  }
  return (
    <section className="section2-container">
        <div className="section2-content">
            <motion.div className="section2-content-flex" 
               initial={{ opacity: 0, scale: .7}}
               whileInView={{ opacity: 1, scale: 1}}
               transition={{ duration: .4}}
            >
                <motion.div className="section2-content-card" 
                  variants={variants}
                  initial='initial'
                  whileHover='visible'
                >
                     <div className="section2-content-card-icon">
                        <FiYoutube size={45}/>
                     </div>
                     <div className="section2-content-card-text">
                        <h3>Book a call</h3>
                        <p>A quick 30 minute call to check if we are a good match for each other.</p>
                     </div>
                </motion.div>

                <motion.div className="section2-content-card" 
                variants={variants}
                initial='initial'
                whileHover='visible'
                >
                     <div className="section2-content-card-icon">
                        <FiTool size={45}/>
                     </div>
                     <div className="section2-content-card-text">
                        <h3>Subscribe to a plan</h3>
                        <p>Our plans come with no strings attached.
                             Simple and hassle free.</p>
                     </div>
                </motion.div>

                <motion.div className="section2-content-card" 
                   variants={variants}
                   initial='initial'
                   whileHover='visible'
                >
                     <div className="section2-content-card-icon">
                        <FiSend size={45}/>
                     </div>
                     <div className="section2-content-card-text">
                        <h3>Submit your request</h3>
                        <p>Use a premade request
                             template or go freestyle. It’s up to you.</p>
                     </div>
                </motion.div>

            </motion.div>
            <motion.div className="section2-content-text" 
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1, y: [0, 70, 50, 0]}}
              transition={{ duration: .3}}
            >
                <h2>A few simple steps to get started</h2>
                <p>We're on a mission to make you successful with Shopify. We'll become part of your team,
                     working alongside for the duration of your projects.</p>
                <Link to="#" className='btn-black'>see plans</Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Section2