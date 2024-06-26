import React from "react";
import "./ConstructionLearnmore.css";
import Havana from "../../Images/Images2/havana.jpg";
import construction1 from "../../Images/Images2/construction1.jpg";
import Constructionimg03 from "../../Images/ConstructionImage03.jpeg";
import { Link } from "react-router-dom";

import Footer from "../../component/Footer/Footer";

const ConstructionsLearnmore = () => {
  return (
    <div className="ConstructionLearnmore">
      <div className="Ccontent01">
        <div className="Construction-title">
          <span>Construction</span>
          <Link to="/new-building-consultation">
            <div className="bg-black text-white w-32 h-8 rounded-full border-none cursor-pointer">
              Book now
            </div>
          </Link>
        </div>
        <div className="Construction-images">
          <div className="C01">
            <img src={construction1} alt="" />
          </div>
          <img src={Havana} alt="" />

          <img src={Constructionimg03} alt="" />
        </div>
      </div>
      <div
        className="Ccontent02 "
        style={{ backgroundImage: `url(${Havana})` }}
      >
        <div className="Ccontent02-discription">
          <span>Havana construction:</span>
          <span>
            A leading firm in the industry, excels in delivering high-quality
            and innovative construction solutions.
          </span>
        </div>
      </div>
      <div
        className="Ccontent02 "
        style={{ backgroundImage: `url(${construction1})` }}
      >
        <div className="Ccontent03-discription">
          <span>Quality of work:</span>
          <span>
            A premier construction company, recognized for its unwavering
            commitment to quality, safety, and timely project delivery.
          </span>
        </div>
      </div>
      <div
        className="Ccontent02 "
        style={{ backgroundImage: `url(${Constructionimg03})` }}
      >
        <div className="Ccontent02-discription">
          <span>Client satisfaction:</span>
          <span>
            Renowned for innovative design, skilled craftsmanship, and
            client-centric approach, our company sets industry standards.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionsLearnmore;
