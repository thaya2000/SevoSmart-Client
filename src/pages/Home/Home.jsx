import "./Home.css";
import IntroText from "../../component/HomeComponent/IntroText/IntroText.jsx";
import ProductIntroCard from "../../component/HomeComponent/ProductIntroCard/ProductIntroCard.jsx";
import SolarCoverImage from "../../assets/solar.jpg";
import ConstructionCoverImage from "../../assets/construction.jpg";
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";
import IntroImageSlider from "../../component/HomeComponent/IntroImageSlider/IntroImageSlider.jsx";
import Offer from "../../component/HomeComponent/Offer/Offer/Offer.jsx";
import PastProject from "../../component/HomeComponent/PastProject/PastProject.jsx";

const Home = () => {
  const images = [image1, image2, image3];
  const pastProjects = [
    {
      name: "Solar Energy Ventures - Project 1",
      image: image1,
      description:
        "Project 1 at Solar Energy Ventures exemplified our dedication to harnessing solar power for sustainable energy solutions. By deploying advanced photovoltaic panels coupled with efficient energy storage systems, we successfully provided clean and reliable electricity to communities. This project not only reduced carbon emissions but also promoted energy independence, empowering localities to embrace renewable energy sources.",
    },
    {
      name: "Solar Energy Ventures - Project 2",
      image: image2,
      description:
        "In Project 2, Solar Energy Ventures implemented groundbreaking solar technology to address energy challenges. Through the integration of next-generation solar panels and smart grid infrastructure, we optimized energy distribution and consumption patterns. This initiative not only minimized reliance on non-renewable resources but also enhanced grid resilience, ensuring uninterrupted power supply even during adverse conditions.",
    },
    {
      name: "Solar Energy Ventures - Project 3",
      image: image3,
      description:
        "Project 3 represented a leap forward in solar innovation, demonstrating our commitment to pushing the boundaries of renewable energy. By deploying cutting-edge solar tracking systems and incorporating AI-driven optimization algorithms, we achieved unprecedented levels of energy efficiency and output. This project not only showcased the viability of solar power but also set new standards for sustainable development, inspiring future advancements in renewable energy technology.",
    },
  ];

  return (
    <div className="home ">
      <div className="intro flex flex-row ">
        <div className="flex flex-col w-3/6">
          <div className="flex h-40v">
            <IntroText />
          </div>
          <div className="flex h-60v">
            <Offer />
          </div>
        </div>
        <div className="introImage w-3/6">
          <IntroImageSlider images={images} />
        </div>
      </div>
      <div className="flex w-full h-90v">
        <PastProject pastProjects={pastProjects} />
      </div>
      <ProductIntroCard
        image={SolarCoverImage}
        serviceTitle="Solar Panels"
        orderLink="/energy-order"
        learnMoreLink="/solar-learnmore"
      />
      <ProductIntroCard
        image={ConstructionCoverImage}
        serviceTitle="Constructions"
        orderLink="/new-building-consultation"
        learnMoreLink="/construction-learnmore"
        textColor="#ffffff"
      />
    </div>
  );
};

export default Home;
