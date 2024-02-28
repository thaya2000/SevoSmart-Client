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
// import Flow from "../../component/HomeComponent/Flow/Flow.jsx";

const Home = () => {
  const images = [image1, image2, image3];
  return (
    <div className="home fixed">
      <div className="intro grid grid-cols-2 ">
        <div className="grid grid-rows-2">
          <IntroText />
          <div>{/* <Flow /> */}</div>
        </div>
        <div className="introImage">
          <IntroImageSlider images={images} />
        </div>
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
