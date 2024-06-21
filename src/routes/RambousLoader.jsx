import Rhombus from "../assets/Loaders/Rhombus.gif";
import sevo from "../assets/Loaders/sevo_new.png";

const RambousLoader = () => {
  return (
    <div className="flex fixed  bg-white items-center justify-center w-100v h-100v z-50">
      <img src={Rhombus} alt="loading" />
    </div>
  );
};

// const RambousLoader = () => {
//   return (
//     <div
//       className="flex items-center justify-center w-screen h-screen"
//       onMouseDown={(e) => e.preventDefault()}
//     >
//       <img
//         src={sevo}
//         alt="loading"
//         className="animate-spin-slow w-12 h-12"
//       />
//     </div>
//   );
// };

export default RambousLoader;
