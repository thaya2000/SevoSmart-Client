import React from "react";
import { SlArrowDown } from "react-icons/sl";
import Accessory from "../../component/Shop/Accessory";
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";

const Accessories = () => {
  const accessories = [
    {
      accessory_image: image1,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
    {
      accessory_image: image2,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
    {
      accessory_image: image3,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
    {
      accessory_image: image1,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
    {
      accessory_image: image2,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
    {
      accessory_image: image2,
      accessory_name: "Solar Lights",
      accessory_price: "7500 lkr",
    },
  ];

  return (
    <div className="flex flex-col mt-7">
      <div className="flex flex-row justify-between border-b border-black pb-3">
        <div className="flex pl-5 sm:text-5xl sm:font-semibold text-2xl font-medium">
          Accessories
        </div>
        <div className="flex pl-5 sm:text-5xl sm:font-semibold text-2xl font-medium">
          Accessories
        </div>
        <div className="flex flex-row justify-between gap-x-3 items-center pr-5">
          <div className="flex sm:text-2xl text-lg font-light">Browse all</div>
          <div className="flex">
            <SlArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {accessories.map((accessory, index) => (
          <Accessory
            key={index}
            accessory_image={accessory.accessory_image}
            accessory_name={accessory.accessory_name}
            accessory_price={accessory.accessory_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
