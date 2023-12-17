import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import logo1 from '../../images/ABB_logo.png'
import logo2 from '../../images/fronius_logo.png'
import logo3 from '../../images/goodwe_logo.png'
import logo4 from '../../images/growatt_logo.webp'
import logo5 from '../../images/huawei_logo.png'
import logo6 from '../../images/jinko_logo.svg'
import logo7 from '../../images/omnik_logo.png'
import logo8 from '../../images/rec_logo.png'
import logo9 from '../../images/sma_logo.png'
import logo10 from '../../images/solax_logo.png'
import logo11 from '../../images/solis_logo.png'
import logo12 from '../../images/suntree_logo.png'
import logo13 from '../../images/trinasolar_logo.png'
import logo14 from '../../images/yinkli_logo.png'

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
                <FaFacebook size={30} color="#1877f2" />
                
                <IoLogoWhatsapp size={30} color="#25D366" />
                
                
                <MdMailOutline size={30} color="#D44638" />

              </div>
              <span className='SoftwareDeveloped'>Powered by DreamTrillians </span>
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