import React from 'react'
import '../css/Footer/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
             <div className="footer-content-div1">
                 <Link to="#" className='footer-logo'>Logo</Link>
             </div>
             <div className="footer-content-div2">
                  <ul>
                    <li><Link to="#">Pricings</Link></li>
                    <li><Link to="#">FAQs</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                  </ul>

                  <ul>
                    <li><Link to="#">Client login</Link></li>
                    <li><Link to="#">Get started</Link></li>
                    <li><Link to="#">Terms and Conditions</Link></li>
                  </ul>
             </div>
        </div>
    </footer>
  )
}

export default Footer