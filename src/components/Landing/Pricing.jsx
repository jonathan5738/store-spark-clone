import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/Landing/Pricing.css'
function Pricing() {
  const variants = {
    initial: {scale: 1},
    animation: {scale: 1.1}
  }
  return (
    <section className="pricing" 
    >
        <motion.div 
           initial={{ opacity: 0, scale: .7}}
           whileInView={{ opacity: 1, scale: 1}}
           transition={{ ease: 'easeIn', duration: .3}}
        >

<div className="pricing-text">
            <h3>Pricing</h3>
            <p>Our pricing allows you to do more while spending less. Cancel at any time. No contracts.</p>
        </div>
         <div className="pricing-grid">
              <motion.div className="pricing-card" 
                 variants={variants}
                 initial='initial'
                 whileHover='animation'
                 transition={{ duration: .3}}
              >
                  <div className="pricing-card-text">
                        <h3>Essential</h3>
                        <p>For entrepreneurs and businesses with ongoing Shopify needs</p>
                        <h4 className="price">$849 <span className="duration">/mo</span></h4>
                        <div className="price-links">
                        <Link to="#" className="btn-black price-btn">Get started</Link>
                        <Link to="#" className="btn-white price-btn">Book a call</Link>
                        </div>
                  </div>
                  <ul className='advantages'>
                     <h4>What's included:</h4>
                     <li>Unlimited requests</li>
                     <li>Unlimited stores and brands</li>
                     <li>Unlimited team members</li>
                     <li>Dedicated account manager</li>
                     <li>Live chat support</li>
                     <li>Cancel anytime</li>
                  </ul>
              </motion.div>

              <motion.div className="pricing-card" 
                 variants={variants}
                 initial='initial'
                 whileHover='animation'
                 transition={{ duration: .3}}
              >
                  <div className="pricing-card-text">
                        <h3>Growth</h3>
                        <p>For those looking to expand their team with dedicated Shopify expert</p>
                        <h4 className="price">$1349 <span className="duration">/mo</span></h4>
                        <div className="price-links">
                        <Link to="#" className="btn-black price-btn">Get started</Link>
                        <Link to="#" className="btn-white price-btn">Book a call</Link>
                        </div>
                  </div>
                  <ul className='advantages'>
                     <h4>What's included:</h4>
                     <li>All the Essential plan features</li>
                     <li>Storefront audit</li>
                     <li>New store builds and redesigns</li>
                     <li>Monthly reviews and planning</li>
                     <li>Ongoing support & improvement suggestions</li>
                  </ul>
              </motion.div>

              <motion.div className="pricing-card"
                 variants={variants}
                 initial='initial'
                 whileHover='animation'
                 transition={{ duration: .3}}
              >
                  <div className="pricing-card-text">
                        <h3>Enterprise</h3>
                        <p>For creative & digital agencies in need of Shopify support</p>
                        {/* <Link to="#"></Link> */}
                        <div className="price-links price-links-special">
                            <Link to="#" className="btn-white price-btn">Book a call</Link>
                        </div>
                  </div>
                  <ul className='advantages'>
                     <h4>What's included:</h4>
                     <li>Multiple requests at a time</li>
                     <li>Expedited deliveryt</li>
                     <li>Real-time Slack collaboration</li>
                  </ul>
              </motion.div>

         </div>
         
        </motion.div>
        
    </section>
  )
}

export default Pricing