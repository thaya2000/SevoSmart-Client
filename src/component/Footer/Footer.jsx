import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Navigation/NavComponent/Logo/Logo";
import Partners from "./Partners/Partners";

const Footer = () => {
  return (
    <div className="footer w-full h-100v  relative  flex flex-col ">
      <div className="w-full h-4/10 my-10">
        <Partners />
      </div>
      <div className="flex flex-row w-full h-6/10  ">
        <div className="flex flex-col w-4/10 h-full  p-4">
          <div className="mb-10">
            <Logo />
          </div>
          <p className="text-y mb-5">
            Sign up for our newsletter and case alert system
          </p>
          <p className="mb-10">E-mail</p>
          <div className="mb-5">
            <hr className="flex w-6/10" />
          </div>
          <div className="news-letter-button mb-4">
            <p>Submit</p>
          </div>
          <div className="flex flex-row w-3/12 items-center justify-around mb-10">
            <FaFacebook size="1.5rem" />
            <IoMdMail size="1.5rem" />
            <FaWhatsapp size="1.5rem" />
          </div>
          <p>© 2024 Powered by DreamTrillions</p>
        </div>
        <div className="flex w-3/10 h-full  p-4">
          <div className="flex flex-col">
            <p className="menu-heading">Menu</p>
            <p className="menu-content">About Us</p>
            <p className="menu-content">What we offer</p>
            <p className="menu-content">Careers</p>
            <p className="menu-content">Investor Relations</p>
            <p className="menu-content">Video Guides</p>
            <p className="menu-content">Customer Stories</p>
            <p className="menu-content">Events</p>
          </div>
        </div>
        <div className="flex w-3/10 h-full  p-4">
          <div className="flex flex-col">
            <p className="menu-heading">Address</p>
            <div className="menu-content">
              <p>SEVO SMART TECH (PVT) LTD.</p>
              <p>Kiri-vasa,</p>
              <p>Chenaikudyruppu-01A,Kalmunai. </p>
            </div>

            <p className="menu-heading">Phone Number</p>
            <p className="menu-content">T:0672225881 | 0711665128</p>
            <p className="menu-heading">Email</p>
            <p className="menu-content">sevosmarttech2001@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
