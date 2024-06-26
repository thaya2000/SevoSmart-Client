import { useState, useEffect } from "react";
import "./Home.css";
import IntroText from "../../component/HomeComponent/IntroText/IntroText.jsx";
import ProductIntroCard from "../../component/HomeComponent/ProductIntroCard/ProductIntroCard.jsx";
import SolarCoverImage from "../../assets/solar.jpg";
import ConstructionCoverImage from "../../assets/construction.jpg";
import image1 from "../../Images/cons1.jpg";
import image2 from "../../Images/pro1.jpg";
import image3 from "../../Images/S1.jpeg";
import IntroImageSlider from "../../component/HomeComponent/IntroImageSlider/IntroImageSlider.jsx";
import PastProject from "../../component/HomeComponent/PastProject/PastProject.jsx";
import BillCalculator from "../../component/HomeComponent/BillCalculator/BillCalculator.jsx";
import OfferPanel from "../../component/HomeComponent/OfferPanel/OfferPanel/OfferPanel.jsx";
import axios from "axios";
import RambousLoader from "../../routes/RambousLoader";

const Home = () => {
  const [pastProjects, setPastProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPastProjects = async () => {
      try {
        setLoading(true);
        const result = await axios.get("/api/v1/admin/past-projects");
        setLoading(false);
        console.log(result);

        // Transform the data to match the structure required by your component
        const transformedData = result.data.map((project) => ({
          name: project.projectName,
          // image: project.productImageURL[0], // Taking the first image
          image: project.productImageURL[0], // Taking the first image
          description: project.description,
        }));

        setPastProjects(transformedData);
      } catch (error) {
        console.error("Error fetching past projects:", error);
      }
    };

    fetchPastProjects();
  }, []);

  const images = [image1, image2, image3];

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="home">
          <div className="intro grid grid-cols-1 xl:grid-cols-2">
            <div className="grid sm:grid-rows-2">
              <div className="flex">
                <IntroText />
              </div>
              <div className="flex justify-center items-center w-full">
                <OfferPanel />
              </div>
            </div>
            <div className="introImage w-full">
              <IntroImageSlider images={images} />
            </div>
          </div>
          <div className="flex w-full relative">
            <PastProject pastProjects={pastProjects} />
          </div>
          <ProductIntroCard
            image={SolarCoverImage}
            serviceTitle="Solar Panels"
            orderLink="/energy-order"
            learnMoreLink="/energy-learnmore"
            buttonText="Order Now"
          />
          <ProductIntroCard
            image={ConstructionCoverImage}
            serviceTitle="Constructions"
            orderLink="/new-building-consultation"
            learnMoreLink="/construction-learnmore"
            textColor="#ffffff"
            buttonText="Consult Now"
          />
          <div>
            <BillCalculator />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
