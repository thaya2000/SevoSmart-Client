import { useState, useEffect } from "react";
import "./BillCalculator.css";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

export default function BillCalculator() {
  const [bill, setBill] = useState("");
  const [userRecommendation, setUserRecommendation] = useState({
    recommendedSolarPower: 0,
    unitPerMonth: 0,
  });
  const [visible, setVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [earnMoney, setEarnMoney] = useState(null);
  const [saveMoney, setSaveMoney] = useState(null);

  useEffect(() => {
    // console.log(earnMoney);
  }, [earnMoney]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (parseFloat(bill) > 150) {
          const { data } = await axios.post(`/bill/calculate`, {
            monthlyBill: parseFloat(bill),
          });
          setUserRecommendation(data);
          selectedPackage != null && handlePackageSelect(selectedPackage);
        } else {
          setUserRecommendation({ recommendedSolarPower: 0, unitPerMonth: 0 });
          setEarnMoney(null);
          setSaveMoney(null);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, [bill]);

  const handleInputChange = async (e) => {
    try {
      const value = e.target.value;
      const newValue = value.replace(/[^0-9.]/g, "");
      setBill(newValue);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handlePackageSelect = async (value) => {
    try {
      setSelectedPackage(value);
      const { data } = await axios.post(`/bill/benefits`, {
        monthlyBill: bill,
        selectedSolarPower: value,
      });
      console.log(data.earnMoney);
      setEarnMoney(data.earnMoney);
      console.log(data.saveMoney);
      setSaveMoney(data.saveMoney);
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

  return (
    <>
      <div className="bill-calculator-button z-20" onClick={handleOpenClick}>
        Bill calculator
      </div>
      {visible && (
        <>
          <div className="bill-calculator-container z-20">
            <div className="bill-calculator p-5 flex flex-col ">
              <div className="font-bold text-center">
                Embrace the Solar Panel that Fits Your Desires
              </div>
              <div className="border-2 p-2 rounded-lg bg-yellow-400 text-zinc-50 font-semibold">
                Domestic
              </div>
              <div className="flex items-center justify-center m-5 p-1 w-4/5 border-b-2">
                <input
                  type="text"
                  className="bg-transparent border-none flex items-center justify-center text-center text-sm md:text-xl"
                  placeholder="Enter your last electricity Bill"
                  value={bill}
                  onChange={handleInputChange}
                  onKeyDown={handleInputChange}
                />
              </div>
              <div className="flex flex-row items-center justify-center text-sm">
                <div className="flex flex-col justify-center border-2 m-2 p-2">
                  <div className="flex justify-center font-bold">
                    {userRecommendation.recommendedSolarPower.toFixed(2)} KW
                  </div>
                  <div className="flex justify-center text-center">
                    Needed Solar Power
                  </div>
                </div>
                <div className="flex flex-col border-2 m-2 p-2">
                  <div className="flex justify-center font-bold">
                    {userRecommendation.unitPerMonth}
                  </div>
                  <div className="flex justify-center text-center">
                    Used Unit Per month
                  </div>
                </div>
              </div>
              <div className="m-2 text-center">Select a Solar Package</div>
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
              {earnMoney != null && (
                <div className="m-2 p-2">You can earn money: {earnMoney} </div>
              )}
              {saveMoney != null && (
                <div className="m-2 p-2">You can save money: {saveMoney} </div>
              )}
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
