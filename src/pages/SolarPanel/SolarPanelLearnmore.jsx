import React from "react";
import "./SolarPanelLearnmore.css";
import Solarimg01 from "../../Images/Images2/Spanel01.jpg";
import Solarimg02 from "../../Images/Images2/Spanel03.png";
import Solarimg03 from "../../Images/Images2/Spanel02.png";
import { Link } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/Footer/Footer";

const SolarPanelLearnmore = () => {
  return (
    <div className="SolarPanelLearnmore">
      <div className="content01">
        <div className="Solar-title">
          <span>Solar panels</span>
          <Link to="/energy-order">
            <button className="bg-black text-white w-32 h-8 rounded-full border-none cursor-pointer">
              shop now
            </button>
          </Link>
        </div>
        <div className="Solar-images">
          <div className="S01">
            <img src={Solarimg02} alt="" />
          </div>
          <img src={Solarimg01} alt="" />

          <img src={Solarimg03} alt="" />
        </div>
      </div>
      <div
        className="content02"
        style={{ backgroundImage: `url(${Solarimg01})` }}
      >
        <div className="content02-discription">
          <span>Renewable Energy Source</span>
          <span>
            Solar panels harness energy from the sun, a virtually limitless and
            renewable source.
          </span>
        </div>
        <div className="content02-img"></div>
      </div>
      <div
        className="content02"
        style={{ backgroundImage: `url(${Solarimg02})` }}
      >
        <div className="content02-img"></div>
        <div className="content03-discription">
          <span>Energy Cost Savings:</span>
          <span>
            One of the most significant financial advantages of solar panels is
            the potential for substantial energy cost savings. By generating
            your own electricity.
          </span>
        </div>
      </div>
      <div
        className="content02"
        style={{ backgroundImage: `url(${Solarimg03})` }}
      >
        <div className="content02-discription">
          <span>Eco Friendly:</span>
          <span>
            Solar panels are a highly eco-friendly energy solution. By
            harnessing sunlight to generate electricity, they produce zero
            emissions, helping combat climate change.
          </span>
        </div>
        <div className="content02-img"></div>
      </div>
    </div>
  );
};

export default SolarPanelLearnmore;
