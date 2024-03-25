import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Navigation/Logo/Logo";
import Partners from "./Partners/Partners";

const Footer = () => {
  return (
    <div className="footer bg-primary md:px-3 md:py-8  mx-auto py-4 ">
      <div className="w-full h-4/10 my-10">
        <Partners />
      </div>
      <div className="footer-bottom-container grid grid-cols-2 mx-auto lg:grid-cols-4 gap-x-0 md:gap-x-0 mp-mobile-bounds">
        <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
          <div className=" mt-5 md:mx-0 md:mt-0">
            <Logo />
          </div>
          <div className="pt-6 md:pt-16 pb-4 md:pb-8  ">
            <strong className="text-secondary block pb-6 text-2xl lg:text-base">
              Sign up for our newsletter and case alert system
            </strong>
            <p className="mb-6 text-left">E-mail</p>
            <hr />
            <div className="grid justify-center py-6">
              <div className="news-letter-button mb-4">Submit</div>
            </div>
          </div>

          <div className="flex justify-center pb-8 lg:pb-0">
            <FaFacebook size="2rem" />
            <IoMdMail size="2rem" className="mx-8" />
            <FaWhatsapp size="2rem" />
          </div>
          {/* <p>© 2024 Powered by DreamTrillions</p> */}
        </div>
        <div className="lg:col-start-3">
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
        <div>
          <div className="flex flex-col">
            <p className="menu-heading">Address</p>
            <div className="menu-content">
              <p>SEVO SMART TECH (PVT) LTD.</p>
              <p>Kiri-vasa,</p>
              <p>Chenaikudyruppu 01A, Kalmunai. </p>
            </div>

            <p className="menu-heading">Phone Number</p>
            <p className="menu-content">T:0672225881 | 0711665128</p>
            <p className="menu-heading">Email</p>
            {/* <p className="menu-content">sevosmarttech2001@gmail.com</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
