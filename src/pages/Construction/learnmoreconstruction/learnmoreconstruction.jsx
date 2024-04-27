import ImageSlider from "./Imagesliderconstruction.jsx";
import "./learnmoreconstruction.css";
import Image8 from "../../../Images/cons4.jpg";
import Image9 from "../../../Images/cons5.jpg";
import Image10 from "../../../Images/cons1.jpg";
import Image11 from "../../../Images/cons6.jpg";

function Learnmoreconstruction() {
  return (
    <div>
      <ImageSlider />

      <div className="middle-container">
        <div className="ImageA-conainer">
          <img
            src={Image8}
            alt="3 Kw Solar System Off Grid"
            className="learnmore-solar"
          />
        </div>
        <div className="textA-container">
          <div>
            <span className="experienceAA">
              Embark on a journey towards sustainable development with our
              cutting-edge construction solutions
            </span>
          </div>
          <div>
            <span className="experienceB">
              Integrating innovation and expertise in every project. Committed
              to eco-friendly materials and energy-efficient designs, we
              illuminate the path towards a greener tomorrow. Our dedication to
              quality craftsmanship and environmental stewardship ensures each
              structure contributes to a radiant, sustainable future. Join us to
              shape construction's responsible future, embracing innovation and
              sustainability for generations to come.
            </span>
          </div>
        </div>
      </div>
      <div className="headof-benifits">
        <span>
          Discover Our Comprehensive Services Tailored to Your Unique Needs
        </span>
      </div>
      <div className="bottom-container">
        <div className="cost-container">
          <img
            src={Image9}
            alt="cost"
            className="cons-image1"
            style={{ borderRadius: "20px" }}
          />
          <div className="eco-friently"> Havana Designs </div>
          <div className="eco-friently-parah">
            Where we build structures so stunning, even the buildings themselves
            pause to admire their own magnificence!{" "}
          </div>
        </div>
        <div className="efficient-container">
          <img
            src={Image11}
            alt="cost"
            className="cons-image2"
            style={{ borderRadius: "20px" }}
          />
          <div className="eco-friently">Old Building Renovation</div>
          <div className="eco-friently-parah">
            Revitalize history with a modern twist! Our renovation services
            blend heritage charm with contemporary design, breathing new life
            into old buildings.
          </div>
        </div>

        <div className="longlife-container">
          <img
            src={Image10}
            alt="cost"
            className="learnmore-solar3"
            style={{ borderRadius: "10px" }}
          />
          <div className="eco-friently"> Quality of work </div>
          <div className="eco-friently-parah">
            We're not just builders; we're your partners in creating lasting
            legacies. With a keen eye for quality, safety, and punctuality, we
            craft dreams into reality.
          </div>
        </div>
      </div>
      <div className="bottom-para">
        "Consult with us to unlock insights and enrich your understanding of
        construction. Together, we can elevate your knowledge and bring your
        vision to life."
      </div>
    </div>
  );
}

export default Learnmoreconstruction;
