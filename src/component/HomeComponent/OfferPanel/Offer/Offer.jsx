import "./Offer.css";
import PropTypes from "prop-types";

export default function Offer({ label, icon, iconBgColor, labelBgColor }) {
  return (
    <div className="offer">
      <div
        className="offer-icon flex items-center justify-center"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <div className="offer-label" style={{ backgroundColor: labelBgColor }}>
        {label}
      </div>
    </div>
  );
}

Offer.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  labelBgColor: PropTypes.string.isRequired,
};
