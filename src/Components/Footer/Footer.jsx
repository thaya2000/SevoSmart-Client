import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import logo1 from '../../Images/ABB_logo.png'
import logo2 from '../../Images/fronius_logo.png'
import logo3 from '../../Images/goodwe_logo.png'
import logo4 from '../../Images/growatt_logo.webp'
import logo5 from '../../Images/huawei_logo.png'
import logo6 from '../../Images/jinko_logo.svg'
import logo7 from '../../Images/omnik_logo.png'
import logo8 from '../../Images/rec_logo.png'
import logo9 from '../../Images/sma_logo.png'
import logo10 from '../../Images/solax_logo.png'
import logo11 from '../../Images/solis_logo.png'
import logo12 from '../../Images/suntree_logo.png'
import logo13 from '../../Images/trinasolar_logo.png'
import logo14 from '../../Images/yinkli_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="details">
            <div className="contact">
              <span>Contact Us</span>
              <span>SEVO SMART TECH (PVT) LTD.</span>
              <span>Kiri-vasa,
                Chenaikudyruppu-01A,Kalmunai.
              </span>
              <span>T:0672225881 | 0711665128 </span>
              <span>E:sevosmarttech2001@gmail.com</span>

            </div>
            <div className="socialMedia">
              <span>PowerUp your life with clean energy......</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href='https://www.facebook.com/sevosmart2021?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="#1877f2" />
            </a>
            <a href='tel:+94766865193'>
              <IoLogoWhatsapp size={30} color="#25D366" />
            </a>
                
                
                <a href='mailto:sevosmarttech2001@gmail.com'>
              <MdMailOutline size={30} color="#D44638" />
            </a>

              </div>
              <span className='SoftwareDeveloped'>Powered by DreamTrillions </span>
            </div>

        </div>
        <div className="partners py-4 mx-auto" >
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo8} alt="" />
          <img src={logo9} alt="" />
          <img src={logo10} alt="" />
          <img src={logo11} alt="" />
          <img src={logo12} alt="" />
          <img src={logo13} alt="" />
          <img src={logo14} alt="" />
        </div>
    </div>
  )
}

export default Footer