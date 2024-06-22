import { Link } from "react-router-dom";
import "./ProductIntroCard.css";

const ProductIntroCard = ({
  image,
  serviceTitle,
  orderLink,
  learnMoreLink,
  textColor = "#081c3a",
  buttonText,
}) => {
  return (
    <div className="service">
      <img
        src={image}
        className="service__background-image"
        alt={serviceTitle}
      />
      <div className="service__overlay">
        <div className="service__title">
          <span style={{ color: textColor }}>{serviceTitle}</span>
        </div>
        <div className="service__button-container">
          <Link to={orderLink}>
            <div className="service__button-left">{buttonText}</div>
          </Link>
          <Link to={learnMoreLink}>
            <div className="service__button-right">Learn more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductIntroCard;
<Link to="/new-building-consultation">
            <div className="learnmore-buttonB">Consult now</div>
        </Link>