// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation/Navigation.jsx';
import Footer from './component/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Signup from './pages/Auth/signup/Signup.jsx';
import Login from './pages/Auth/login/Login.jsx';
import SolarPanelLearnmore from './pages/SolarPanel/SolarPanelLearnmore.jsx';
import EnergyOrder from './pages/Energy/EnergyOrder.jsx';
import NewBuildingConsultation from './pages/Construction/ConstructionConsultation.jsx';
import ConstructionsLearnmore from './pages/Construction/ConstructionLearnmore.jsx';
import Test from './pages/Test/Test.jsx';
import Loading from './routes/Loading.jsx';
import Accessories from './pages/Shop/Accessories.jsx';
import Cart from './pages/Shop/Cart.jsx';
import AccountDetailsForm from './pages/Energy/Energy/energy.jsx';
import OrderSolarPanel from './pages/Energy/OrderSolarPanel/oredrSolarPanel.jsx';
import BillCalculation from './pages/Energy/BillCalculation/billCalculation.jsx';
import Learnmore from './pages/Energy/LearnMoreEnergy/learnmore.jsx';
import ImageSlider from './pages/Energy/LearnMoreEnergy/ImageSlider.jsx';
import AdminPanel from './pages/Admin/AdminPanel.jsx';
import AddProduct from './pages/Admin/AddProduct.jsx';
import EditProduct from './pages/Admin/EditProduct.jsx';
import NewsPage from './pages/News/NewsPage.jsx';
import NewsDetails from './pages/News/NewsDetails.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/energy-order" element={<EnergyOrder />} />
        <Route path="/new-building-consultation" element={<NewBuildingConsultation />} />
        <Route path="/construction-learnmore" element={<ConstructionsLearnmore />} />
        <Route path="/test" element={<Test />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/energy" element={<AccountDetailsForm />} />
        <Route path="/orderSolarPanel" element={<OrderSolarPanel />} />
        <Route path="/billCalculation" element={<BillCalculation />} />
        <Route path="/ImageSlider" element={<ImageSlider />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/newspage/:id" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
