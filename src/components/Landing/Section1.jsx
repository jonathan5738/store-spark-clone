import React from 'react'
import { motion } from 'framer-motion'
import '../css/Landing/Section1.css'
function Section1() {
  const variants = {
     initial: { opacity: 0, scale: .7},
     visible : {opacity: 1, scale: 1}
  }
  return (
     <section className="section1-container">
        <div className="section1-container-text">
             <h2>If it runs on Shopify, we can do it</h2>
        </div>
        <div className="section1-container-grid">
            <motion.div className="section1-div" 
              variants={variants}
              initial='initial'
              whileInView='visible'
              transition={{ duration: .3}}
            >
                 <h3>Theme development and customization</h3>
                 <p>Transform your store from something that looks 
                    like a default template into something that looks like you.</p>
                    <ul>
                        <li>Shopify theme set up</li>
                        <li>Theme upgrade</li>
                        <li>Functionality review</li>
                        <li>Custom feature implementation</li>
                    </ul>
            </motion.div>
            <motion.div className="section1-div-img"
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ duration: .3}}
            >
                <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623aea9bc483694f75b4bf18_development-1-p-500.png" alt="" />
            </motion.div>

            <motion.div className="section1-div-img" 
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ duration: .3}}
            >
                <img src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623aec035f1940850cf7da3d_design-1-p-500.png" alt="" />
            </motion.div>

            <motion.div className="section1-div" 
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ duration: .3}}
            >
                 <h3>Design and graphic tasks</h3>
                 <p>Create beautiful designs for any page or for marketing
                     assets and watch the eyeballs roll in.</p>
                    <ul>
                        <li>User interface store reviews</li>
                        <li>Full page mockups</li>
                        <li>Email newsletter designs</li>
                        <li>Banners and pop-ups</li>
                    </ul>
            </motion.div>

            <motion.div className="section1-div"
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ duration: .3}}
             >
                 <h3>Troubleshooting and maintenance</h3>
                 <p>Fix bugs, troubleshoot or audit your store for potential issues in a jiffy.</p>
                    <ul>
                        <li>Site speed audits</li>
                        <li>Urgent bug fixes</li>
                        <li>App and theme conflicts</li>
                        <li>App installs and configuration</li>
                    </ul>
            </motion.div>

            <motion.div className="section1-div-img" 
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ duration: .3}}
            >
                <img className='image' src="https://uploads-ssl.webflow.com/621cb14364591214cf9b304b/623aec04f5795a8e7f867493_maintenance-p-500.png" alt="" />
            </motion.div>

        </div>
     </section>
  )
}

export default Section1