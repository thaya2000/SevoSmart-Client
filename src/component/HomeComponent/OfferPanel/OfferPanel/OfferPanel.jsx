import "./OfferPanel.css";
import offer_solar from "../../../../assets/offer_solar.png";
import { FaLightbulb } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";
import Offer from "../Offer/Offer";

export default function OfferPanel() {
  return (
    <div>
      <div className=" sm:flex hidden items-center justify-center flex-row py-10 ">
        <div className="flex justify-center offer-panel arc">
          <div className="circle deg-0"></div>
          <div className="circle deg-22"></div>
          <div className="circle deg-45"></div>
          <div className="circle deg-338"></div>
          <div className="circle deg-315"></div>

          <div className="line deg-0-line">
            <hr></hr>
          </div>

          <div className="line deg-22-line">
            <hr></hr>
          </div>
          <div className="line deg-45-line">
            <hr></hr>
          </div>
          <div className="line deg-338-line">
            <hr></hr>
          </div>
          <div className="line deg-315-line">
            <hr></hr>
          </div>

          <div className="offers deg-0-offer">
            <Offer
              label="25 year warranty"
              iconBgColor="#FFD700"
              labelBgColor="#ffffff"
              icon={<FaLightbulb size="1.5rem" />}
            />
          </div>
          <div className="offers deg-22-offer">
            <Offer
              label="100% inverter warranty"
              iconBgColor="#ffffff"
              labelBgColor="#FFD700"
              icon={<MdSecurity size="1.5rem" />}
            />
          </div>
          <div className="offers deg-45-offer">
            <Offer
              label="95% save electricity"
              iconBgColor="#FFD700"
              labelBgColor="#ffffff"
              icon={<BsLightningFill size="1.5rem" />}
            />
          </div>
          <div className="offers deg-338-offer">
            <Offer
              label="10 years of battery life"
              iconBgColor="#ffffff"
              labelBgColor="#FFD700"
              icon={<MdSecurity size="1.5rem" />}
            />
          </div>
          <div className="offers deg-315-offer">
            <Offer
              label="25 year panel warranty"
              iconBgColor="#FFD700"
              labelBgColor="#ffffff"
              icon={<FaLightbulb size="1.5rem" />}
            />
          </div>

          <div className=" flex items-center justify-center relative w-full h-full ">
            <img
              src={offer_solar}
              alt="offer_solar"
              className="w-full h-full"
            />
            <div className="offer-amount flex items-center justify-center w-2/5 h-2/5 absolute bottom-0 left-0 animate-blink-scale">
              50%
              <div className="flex items-center justify-center absolute "></div>
            </div>
          </div>
        </div>
        <div className="flex w-80"></div>
      </div>
      <div className="sm:hidden grid my-5">
        <div className="grid justify-center items-center text-secondary text-4xl font-bold py-5">
          Exclusive Offers
        </div>
        <div className="grid grid-rows-5 gap-5">
          <Offer
            label="25 year warranty"
            iconBgColor="#FFD700"
            labelBgColor="#ffffff"
            icon={<FaLightbulb size="1.5rem" />}
          />
          <Offer
            label="100% inverter warranty"
            iconBgColor="#ffffff"
            labelBgColor="#FFD700"
            icon={<MdSecurity size="1.5rem" />}
          />
          <Offer
            label="95% save electricity"
            iconBgColor="#FFD700"
            labelBgColor="#ffffff"
            icon={<BsLightningFill size="1.5rem" />}
          />
          <Offer
            label="10 years of battery life"
            iconBgColor="#ffffff"
            labelBgColor="#FFD700"
            icon={<MdSecurity size="1.5rem" />}
          />
          <Offer
            label="25 year panel warranty"
            iconBgColor="#FFD700"
            labelBgColor="#ffffff"
            icon={<FaLightbulb size="1.5rem" />}
          />
        </div>
      </div>
    </div>
  );
}
