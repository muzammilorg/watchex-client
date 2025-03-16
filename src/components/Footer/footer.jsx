import React from 'react'
import styles from './footer.module.scss'
import Logo from '../../assets/logos/logo.png'
import { NavLink } from 'react-router-dom'
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";



const Footer = () => {
  return (
    <>
    <div className={`${styles.footer_container} `}>

        <div className='container row p-4 g-0 d-flex '>
            <div className='order-first col-12 col-lg-6 p-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={Logo} alt="" className='w-50' />

                <p className='text-center text-light'>
                At Watchex, we continuously work toward increasing sustainability in cinemas. Our five-step sustainability program brings a better customer experience and improves our operations.
                </p>
            </div>

            <div className={`${styles.footer_links} mt-4 p-2 order-second d-flex justify-content-between  col-12 col-lg-6`}>
             <div>
             <h3>Meet at Watchex</h3>
              <ul>
                <li><NavLink to={'./about-us'}>About Us</NavLink></li>
                <li><NavLink to={'./career'}>Career</NavLink></li>
                <li><NavLink to={'./privacy-policy'}>Privacy Policy</NavLink></li>
                <li><NavLink to={'./terms-condition'}>Terms & Condition</NavLink></li>
                
              </ul>
             </div>

             <div>
             <h3>Contact Us</h3>
              <ul>
                <li><MdPhone /> 214123456</li>
                <li><MdEmail /> contact@watchex.film</li>
                <li><IoLocationSharp /> 2365 Victory Park Lane, Singapore</li>
              </ul>
             </div>

              
        </div>
        </div>

        


            
    </div>
    <div className={`${styles.bottom_footer} px-5 d-flex g-4  justify-content-between align-items-center`}>
      <p>Copyright&copy; 2025 <NavLink to={'./'}>WatchEX</NavLink>. All Right Reserved.</p>
      <p>Design By <NavLink to={'./'}>Muzammil</NavLink></p>
        </div>
    
    </>
  )
}

export default Footer