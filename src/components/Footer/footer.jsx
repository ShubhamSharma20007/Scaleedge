import React from 'react'
import './Footer.css'
import scalewhitelogo from "../../assets/images/scaleedge-white-logo.webp"
import footericon from  "../../assets/images/footer-lady-logo.webp"
import { Link } from 'react-router-dom'



function Footer() {
  return (
   <>
   <div className='row footer-small'>
    <img src={footericon} alt=""  className='img-fluid'/>
    <h1 className='text-center col-md-5'> Let’s Business Something Agency</h1>
    <p  className='col-md-5'>There are many variations of passages of agency Lorem Ipsum Fasts injecte.</p>
    <a href="">Get Started</a>

   </div>
   <div className='container-fluid footer-container'>
   <div className='row footer-row'>
    <div className='col-md-4 footer-col-1 footer-col'>
      <img className='footer-logo-img img-fluid' src={scalewhitelogo} width={'50%'} alt="" />
      <p className='footer-para-1'>Our approach to itis unique around know work an we know doesn’t work verified factors in play.</p>
      <div className='footer-phone'>
      <i className="fa-solid fa-phone"></i>
        <p className='mobilenum-content'>Have any questions? <br /> <Link to="tel:+9414567867">+9414567867 </Link></p>
      </div>
    </div>
    <div className='col-md-2 footer-col-2 footer-col'>
      <h4 className='footer-heading text-light'>Service</h4>
      <h5>Web Design</h5>
      <h5>Development</h5>
      <h5>WordPress</h5>
      <h5>Online Marketing</h5>
      <h5>Content</h5>
    </div>
    <div className='col-md-2 footer-col-3 footer-col'>
      <h4 className='footer-heading text-light'>Support Link</h4>
      <h5>Web Design</h5>
      <h5>Development</h5>
      <h5>WordPress</h5>
      <h5>Online Marketing</h5>
     <h5>Content</h5>
    </div>
    <div className='col-md-4 footer-col-4 footer-col'>
      <h4 className='footer-heading text-light'>Newslatter</h4>
      <p>Our approach to itis unique around know work an we know.</p>
      
      <div className='footer-seach'>
      <input type="text"  placeholder='Your Email'/>
      
      <button>Subscribe</button>
      </div>
      
     
      <div className='footer-social-media-wrapper'>
      <h5>Social Media:</h5>
      <i className="fa-brands fa-facebook-f icon-wrapper face"></i>
      <i className="fa-brands fa-twitter icon-wrapper "></i>
      <i class="fa-brands fa-linkedin-in icon-wrapper"></i>
      <i className="fa-brands fa-instagram icon-wrapper"></i>

      </div>
    </div>
   </div>
   </div>

   </>
  )
}

export default Footer