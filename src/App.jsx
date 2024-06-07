import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation/Navigation.jsx";
import Home from "../src/pages/Home/Home.jsx";
import SolarPanelLearnmore from "../src/pages/SolarPanel/SolarPanelLearnmore.jsx";
import EnergyOrder from "../src/pages/Energy/EnergyOrder.jsx";
import NewBuildingConsultation from "../src/pages/Construction/ConstructionConsultation.jsx";
import Test from "./pages/Test/Test.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Signup from "./pages/Auth/signup/Signup.jsx";
import Login from "./pages/Auth/login/Login.jsx";
import { Toaster } from "react-hot-toast";
import Loading from "./routes/Loading.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import Accessories from "./pages/Shop/Accessories.jsx";
import Cart from "./pages/Shop/Cart.jsx";
import AccountDetailsForm from "./pages/Energy/Energy/energy.jsx";
import OrderSolarPanel from "./pages/Energy/OrderSolarPanel/oredrSolarPanel.jsx";
import BillCalculation from "./pages/Energy/BillCalculation/billCalculation.jsx";
import Learnmore from "./pages/Energy/LearnMoreEnergy/learnmore.jsx";
import Learnmoreconstruction from "./pages/Construction/learnmoreconstruction/learnmoreconstruction.jsx";
import AdminPanel from "./pages/Admin/AdminPanel.jsx";
import AddProduct from "./pages/Admin/AddProduct.jsx";
import EditProduct from "./pages/Admin/EditProduct.jsx";
import Products from "./pages/Admin/Products.jsx";
import PastProjects from "./pages/Admin/PastProjects.jsx";
import AddProject from "./pages/Admin/AddProject.jsx";
import Users from "./pages/Admin/Users.jsx";
import EditPastProject from "./pages/Admin/EditPastProject.jsx";
import ImageSliderConstruction from "./pages/Construction/learnmoreconstruction/Imagesliderconstruction.jsx";
import NewsPage from "./pages/News/NewsPage.jsx";
import NewsDetails from "./pages/News/NewsDetails.jsx";
import ProductDetails from "./pages/Shop/ProductDetail.jsx";
import UserDropdown from "./component/HomeComponent/Userdropdownmenu/Userdropdownmenu.jsx";
import OrderDetails from "./pages/Admin/OrderDetails.jsx";
import Setting from "./component/HomeComponent/Setting/setting.jsx";
import Passwordsetting from "./component/HomeComponent/Setting/Passwordsetting.jsx";
import EditNews from "./pages/Admin/EditNews.jsx";
import GuestRoutes from "./routes/GuestRoutes.jsx";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTopOnRouteChange />
      <Navigation />
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/user/*" element={<PrivateRoutes />} />
        <Route path="/*" element={<GuestRoutes />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/energy-order" element={<EnergyOrder />} />
        <Route
          path="/new-building-consultation"
          element={<NewBuildingConsultation />}
        />
        <Route
          path="/construction-learnmore"
          element={<Learnmoreconstruction />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/energy" element={<AccountDetailsForm />} />
        <Route path="/orderSolarPanel" element={<OrderSolarPanel />} />
        <Route path="/billCalculation" element={<BillCalculation />} />
        <Route path="/energy-learnmore" element={<Learnmore />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit-project/:id" element={<EditPastProject />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/newspage/:id" element={<NewsDetails />} />
        <Route path="/userdropdownmenu" element={<UserDropdown />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        {/* <Route path="/order-details/:id" element={<OrderDetails />} /> */}
        <Route
          path="/imagesliderconstruction"
          element={<ImageSliderConstruction />}
        />
        <Route path="/setting" element={<Setting />} />
        <Route
          path="/learnmoreconstruction"
          element={<Learnmoreconstruction />}
        />{" "}
        <Route path="/passwordsetting" element={<Passwordsetting />} />
        {/* <Route path="/user" element={<PrivateRoutes />}>
          <Route path="accessories" element={<Accessories />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/newsedit/:id" elememt={<EditNews/>}/>
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="admin-panel" element={<AdminPanel />} />
        </Route>
        </Route> */}
        {/* <Route path="/admin" element={<AdminRoutes />}>
          <Route path="admin-panel" element={<AdminPanel />} />
          <Route path="order-details/:orderNumber" element={<OrderDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route> */}
        <Route path="/passwordsetting" element={<Passwordsetting />} />
        <Route path="/usersetting" element={<Setting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
