import { useState, useEffect } from "react";
import image1 from "../../../Images/S1.jpeg";
import image2 from "../../../Images/S2.jpeg";
import image3 from "../../../Images/S3.jpeg";
import "./orderSolarPanel.css";

function OrderSolarPanelImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const images = [image1, image2, image3];

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="image-container">
      <img
        src={currentImageIndex === 0 ? image1 : currentImageIndex === 1 ? image2 : image3}
        alt=""
        className="image"
      />
    </div>
  );
}

export default OrderSolarPanelImage;
