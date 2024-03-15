import React, { useState } from "react";
import "./BillCalculator.css";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

export default function BillCalculator() {
  const [bill, setBill] = useState("");
  const [data, setData] = useState({
    recommendedSolarPower: 0,
    unitPerMonth: 0,
  });
  const [visible, setVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleInputChange = async (e) => {
    try {
      const value = e.target.value;
      const newValue = value.replace(/[^0-9.]/g, "");
      setBill(newValue);

      if (parseFloat(newValue) > 150) {
        const { data } = await axios.post(`http://localhost:8083/bill`, {
          monthlyBill: parseFloat(newValue),
        });
        setData(data);
      } else {
        setData({ recommendedSolarPower: 0, unitPerMonth: 0 });
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleOpenClick = () => {
    setVisible(true);
  };

  const handleCloseClick = () => {
    setVisible(false);
  };

  const handlePackageSelect = (value) => {
    setSelectedPackage(value);
  };

  return (
    <>
      <div className="bill-calculator-button z-20" onClick={handleOpenClick}>
        Bill calculator
      </div>
      {visible && (
        <>
          <div className="bill-calculator-container z-20">
            <div className="bill-calculator flex flex-col ">
              <div className="font-bold">
                Embrace the Solar Panel that Fits Your Desires
              </div>
              <div className="border-2 p-2 rounded-lg bg-yellow-400 text-zinc-50 font-semibold">
                Domestic
              </div>
              <div className="flex items-center justify-center m-5 p-1 w-4/5 border-b-2">
                <input
                  type="text"
                  className="bg-transparent border-none flex items-center justify-center text-center"
                  placeholder="Enter your last electricity Bill"
                  value={bill}
                  onChange={handleInputChange}
                  onKeyDown={handleInputChange}
                />
              </div>
              <div className="flex flex-row items-center justify-center text-sm">
                <div className="flex flex-col justify-center border-2 m-2 p-2">
                  <div className="flex justify-center font-bold">
                    {data.recommendedSolarPower.toFixed(2)} KW
                  </div>
                  <div className="flex justify-center">Needed Solar Power</div>
                </div>
                <div className="flex flex-col border-2 m-2 p-2">
                  <div className="flex justify-center font-bold">
                    {data.unitPerMonth}
                  </div>
                  <div className="flex justify-center">Used Unit Per month</div>
                </div>
              </div>
              <div className="m-2">Select a Solar Package</div>
              <div className="flex flex-row">
                <div
                  className={`flex justify-center m-1 p-1 border-2 w-20 cursor-pointer ${
                    selectedPackage === "3" ? "bg-primary text-secondary" : ""
                  }`}
                  onClick={() => handlePackageSelect("3")}
                >
                  3KW
                </div>
                <div
                  className={`flex justify-center m-1 p-1 border-2 w-20 cursor-pointer ${
                    selectedPackage === "5" ? "bg-primary text-secondary" : ""
                  }`}
                  onClick={() => handlePackageSelect("5")}
                >
                  5KW
                </div>
                <div
                  className={`flex justify-center m-1 p-1 border-2 w-20 cursor-pointer ${
                    selectedPackage === "10" ? "bg-primary text-secondary" : ""
                  }`}
                  onClick={() => handlePackageSelect("10")}
                >
                  10KW
                </div>
              </div>
              <div
                className="absolute top-1 right-2"
                onClick={handleCloseClick}
              >
                <IoCloseCircle size="2rem" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
