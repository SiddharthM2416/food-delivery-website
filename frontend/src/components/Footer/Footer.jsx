import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="logo" /> 
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officia consequatur sequi distinctio ab possimus cum natus. Velit vel, eveniet quo qui sed maiores, sint id nemo similique, placeat magni.</p>
               <div className="footer-social-items">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="X" />
                    <img src={assets.linkedin_icon} alt="linkdin" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-12345-67890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy; Tomato.com - All RIghts Reserved</p>
    </div>
  )
}

export default Footer