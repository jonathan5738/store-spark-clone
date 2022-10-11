import React from 'react'
import {motion} from 'framer-motion'
import '../css/Landing/Section3.css'
function Section3() {
  const variants = {
     initial: {opacity: 0, scale: .7},
     animation: { opacity: 1, scale: 1}
  }
  return (
    <motion.section className="section3" 
      variants={variants}
      initial='initial'
      whileInView='animation'
      transition={{ duration: .3}}
    >
        <div className="section3-text">
            <h2>We have it figured out</h2>
            <p>Frictionless workflow and all the necessary features
                 to get your tasks done as fast and smooth as possible.</p>
        </div>
        <motion.div className="section3-grid"
         variants={variants}
         initial='initial'
         whileInView='animation'
         transition={{ duration: .4}}
        >
             <div className="section3-div">
                 <h3>Manage with Trello</h3>
                 <p>Manage your request queue using Trello
                    . View current, queued and completed tasks with ease.</p>
                  <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623a2b9ce06493308a254ee7_Trello%20explainer-p-500.png" alt="" />
             </div>

             <div className="section3-div">
                 <h3>Version control with Git</h3>
                 <p>Separate live and development versions so
                     that your customers only see the finished result.</p>
                  <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623a2b9ca68ed69a0ddea81e_Git%20explaner.png" alt="" />
             </div>

             <div className="section3-div">
                 <h3>Work with your team</h3>
                 <p>Invite unlimited amount of team members. Anyone can submit and track requests.</p>
                  <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623a2b9c1e28cf18752c2759_Team%20explainer-p-500.png" alt="" />
             </div>

        </motion.div>
    </motion.section>
  )
}

export default Section3