import "./Partners.css";
import React from "react";

// Importing partner logos
import abb_logo from "../../../assets/PartnerLogo/ABB_logo.png";
import fronius_logo from "../../../assets/PartnerLogo/fronius_logo.png";
import goodwe_logo from "../../../assets/PartnerLogo/goodwe_logo.png";
import growatt_logo from "../../../assets/PartnerLogo/growatt_logo.webp";
import huawei_logo from "../../../assets/PartnerLogo/huawei_logo.png";
import jinko_logo from "../../../assets/PartnerLogo/jinko_logo.svg";
import omnik_logo from "../../../assets/PartnerLogo/omnik_logo.png";
import rec_logo from "../../../assets/PartnerLogo/rec_logo.png";
import sma_logo from "../../../assets/PartnerLogo/sma_logo.png";
import solax_logo from "../../../assets/PartnerLogo/solax_logo.png";
import solis_logo from "../../../assets/PartnerLogo/solis_logo.png";
import suntree_logo from "../../../assets/PartnerLogo/suntree_logo.png";
import trinasolar_logo from "../../../assets/PartnerLogo/trinasolar_logo.png";
import yinkli_logo from "../../../assets/PartnerLogo/yinkli_logo.png";

// Array of partner logos
const partnerLogos = [
  abb_logo,
  fronius_logo,
  goodwe_logo,
  growatt_logo,
  huawei_logo,
  jinko_logo,
  omnik_logo,
  rec_logo,
  sma_logo,
  solax_logo,
  solis_logo,
  suntree_logo,
  trinasolar_logo,
  yinkli_logo,
];

export default function Partners() {
  return (
    <div className="scroller-container">
      <div className="scroller w-full h-full">
        <div className="scroller_inner_right">
          {partnerLogos.map((logo, index) => (
            <div className="partner" key={index}>
              <img src={logo} alt={`Partner Logo ${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller_inner_right">
          {partnerLogos.map((logo, index) => (
            <div className="partner" key={index}>
              <img src={logo} alt={`Partner Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="scroller w-full h-full">
        <div className="scroller_inner_left">
          {partnerLogos.map((logo, index) => (
            <div className="partner" key={index}>
              <img src={logo} alt={`Partner Logo ${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller_inner_left">
          {partnerLogos.map((logo, index) => (
            <div className="partner" key={index}>
              <img src={logo} alt={`Partner Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
