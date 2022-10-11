import React from 'react'
import { FiHeart, FiClock, FiTrendingUp, FiUsers, FiLayers, FiMapPin } from "react-icons/fi"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/Landing/MemberShip.css'

function MemberShip() {
  return (
    <section className="membership">
        <div className="membership-content">
            <div className="membership-content-text">
                <h3>Membership benefits</h3>
                <p>Storespark is a new and exciting way to outsource all of your 
                    Shopify development work for you to finally focus on growth and strategy.</p>
                    <Link to="#" className='btn-black'>see plans</Link>
            </div>
            <motion.div className="membership-grid" 
               initial={{ opacity: 0}}
               whileInView={{ opacity: 1}}
               transition={{ease: 'easeIn', duration: .3}}
            >
                <div className="membership-card">
                    <div className="membership-card-icon"> <FiClock size={25}/> </div>
                    <h3>Unlimited requests</h3>
                    <p>Delegate all your website tasks to professional Shopify experts.</p>
                </div>

                <div className="membership-card">
                    <div className="membership-card-icon"> <FiTrendingUp size={25}/> </div>
                    <h3>Fast delivery</h3>
                    <p>Create task in 5 minutes and get it back in 12 to 48 hours on average.</p>
                </div>

                <div className="membership-card">
                    <div className="membership-card-icon"> <FiMapPin size={25}/> </div>
                    <h3>Fixed monthly rate</h3>
                    <p>No hidden costs. Pay the same price every month.</p>
                </div>

                <div className="membership-card">
                    <div className="membership-card-icon"> <FiUsers size={25}/> </div>
                    <h3>Collaborate with your team</h3>
                    <p>Speed up the process by inviting all your team members.</p>
                </div>


                <div className="membership-card">
                    <div className="membership-card-icon"> <FiHeart size={25}/> </div>
                    <h3>Friendly human support</h3>
                    <p>Turn to our caring support team for help and advise.</p>
                </div>

                <div className="membership-card">
                    <div className="membership-card-icon"> <FiLayers size={25}/> </div>
                    <h3>Flexible & scalable</h3>
                    <p>No contracts. Scale up and down as you go, cancel at anytime.</p>
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default MemberShip