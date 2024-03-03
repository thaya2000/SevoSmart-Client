import "./Home.css";
import IntroText from "../../component/HomeComponent/IntroText/IntroText.jsx";
import ProductIntroCard from "../../component/HomeComponent/ProductIntroCard/ProductIntroCard.jsx";
import SolarCoverImage from "../../assets/solar.jpg";
import ConstructionCoverImage from "../../assets/construction.jpg";
import FooterNew from "../../component/Footer/FooterNew.jsx";
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";
import IntroImageSlider from "../../component/HomeComponent/IntroImageSlider/IntroImageSlider.jsx";
import LayoutFlowWrapper from "../../component/HomeComponent/LayoutFlow/LayoutFlow.jsx";
import MyFlow from "../../component/HomeComponent/MyFlow/MyFlow.jsx";
import InteractionFlow from "../../component/HomeComponent/InteractionFlow/InteractionFlow.jsx";
import PastProject from "../../component/HomeComponent/PastProject/PastProject.jsx";
// import Flow from "../../component/HomeComponent/Flow/Flow.jsx";

const Home = () => {
  const images = [image1, image2, image3];
  const pastProjects = [
    { name: "SEVO SMART TECH P1", image: image1, description: "description 1" },
    { name: "SEVO SMART TECH P2", image: image2, description: "description 1" },
    { name: "SEVO SMART TECH P3", image: image3, description: "description 1" },
  ];
  return (
    <div className="home fixed">
      <div className="intro flex flex-row ">
        <div className="flex flex-col w-3/6">
          <div className="flex h-40v">
            <IntroText />
          </div>
          <div className="flex h-60v">
            <InteractionFlow />
          </div>
        </div>
        <div className="introImage w-3/6">
          <IntroImageSlider images={images} />
        </div>
      </div>
      <div className="flex w-full h-100v">
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
      <FooterNew />
    </div>
  );
};

export default Home;
