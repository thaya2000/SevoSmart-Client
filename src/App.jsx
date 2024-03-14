import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation/Navigation/Navigation.jsx";
import Home from "../src/pages/Home/Home.jsx";
import SolarPanelLearnmore from "../src/pages/SolarPanel/SolarPanelLearnmore.jsx";
import EnergyOrder from "../src/pages/Energy/EnergyOrder.jsx";
import NewBuildingConsultation from "../src/pages/Construction/ConstructionConsultation.jsx";
import ConstructionsLearnmore from "../src/pages/Construction/ConstructionLearnmore.jsx";
import Test from "./pages/Test/Test.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Signup from "./pages/Auth/signup/Signup.jsx";
import Login from "./pages/Auth/login/Login.jsx";
import { Toaster } from "react-hot-toast";
import Loading from "./routes/Loading.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import Accessories from "./pages/Shop/Accessories.jsx";
import Cart from "./pages/Shop/Cart.jsx";
import NavEnergy from "./component/Navigation/NavEnergy/NavEnergy.jsx";
import AccountDetailsForm from "./pages/Energy/Energy/energy.jsx";
import OrderSolarPanel from "./pages/Energy/OrderSolarPanel/oredrSolarPanel.jsx";
import BillCalculation from "./pages/Energy/BillCalculation/billCalculation.jsx";
import Learnmore from "./pages/Energy/LearnMoreEnergy/learnmore.jsx";
import ImageSlider from "./pages/Energy/LearnMoreEnergy/ImageSlider.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Toaster />
      <Routes>
        {/* <Route path="/" element={<PrivateRoutes />}>
          <Route path="" element={<Home />} />
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/energy-order" element={<EnergyOrder />} />
        <Route
          path="/new-building-consultation"
          element={<NewBuildingConsultation />}
        />
        <Route
          path="/construction-learnmore"
          element={<ConstructionsLearnmore />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/energy" element={<AccountDetailsForm />} />
        <Route path="/orderSolarPanel" element={<OrderSolarPanel />} />
        <Route path="/billCalculation" element={<BillCalculation />} />
        <Route path="/ImageSlider" element={<ImageSlider />} />
        <Route path="/learnmore" element={<Learnmore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
