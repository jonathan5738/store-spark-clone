import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi"
import { motion } from 'framer-motion'

import '../css/Navbar/Navbar.css'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const mobileMenu = useRef()
  const variants = {
    initial: {opacity: 0},
    visible: {opacity: 1}
  }
  const handleShowMenu = () => {
      mobileMenu.current.classList.toggle('hidden')
      setShowMenu(prev => !prev)
  }
  return (
    <section className="navbar-container">
        <div className="navbar-content">
            <Link to="#" className='main-logo'>Logo</Link>
            <FiMenu size={25} className='menu-icon' onClick={handleShowMenu}/>
            <ul className="menu">
                <li className='menu-item'><Link to="#">How it works</Link></li>
                <li className='menu-item'><Link to="#">Pricing</Link></li>
                <li className='menu-item'><Link to="#">FAQs</Link></li>
                <li className='menu-item'><Link to="#">Login</Link></li>
            </ul>
        </div>
        <motion.div className='menu-mobile-container hidden' variants={variants} ref={mobileMenu}
          initial='initial'
          animate={showMenu ? 'visible': ''}
          transition={{ duration: .3 }}
        >
                <ul className="menu-mobile">
                    <li><Link to="#" className='menu-mobile-item'>How it works</Link></li>
                    <li><Link to="#" className='menu-mobile-item'>Pricing</Link></li>
                    <li><Link to="#" className='menu-mobile-item'>FAQs</Link></li>
                    <li><Link to="#" className='menu-mobile-item'>Login</Link></li>
                </ul>
            </motion.div>
    </section>
  )
}

export default Navbar