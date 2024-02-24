import "./Logo.css";
import { IoMdSunny } from "react-icons/io";

export default function Logo() {
  return (
    <div className="sevoLogo my-2">
      <div className="mx-0.25 inline-block">S</div>
      <div className="mx-0.25 inline-block">E</div>
      <div className="mx-0.25 inline-block">V</div>
      <div className="mx-0.25 inline-block">
        <IoMdSunny color="#ffd700" size="1.5vw" />
      </div>
      <div className="mx-0.25 inline-block">S</div>
      <div className="mx-0.25 inline-block">M</div>
      <div className="mx-0.25 inline-block">A</div>
      <div className="mx-0.25 inline-block">R</div>
      <div className="mx-0.25 inline-block">T</div>
      <div className="mx-0.25 text-base text-red-500 inline-block">e</div>
      <div className="mx-0.25 text-base text-blue-500 inline-block">c</div>
      <div className="mx-0.25 text-base text-green-500 inline-block">h</div>
    </div>
  );
}
