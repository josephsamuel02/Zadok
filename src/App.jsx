import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./pages/404_Page";
import Home from "./pages/Home";
import Products from "./pages/Products/index";
import Gallery from "./pages/Gallery/Gallery";
import PUBLICROUTES from "./utils/PublicRoutes";
import Footer from "./components/Footer";
import RequestForm from "./pages/RequestForm/RequestForm";
import About from "./pages/About/index";
import Contact from "./pages/Contact/Contact";
import Requests from "./admin/Requests";
import AdminProducts from "./admin/AdminProducts";
import LogInPage from "./admin/Auth/LogInPage";
import UploadProducts from "./admin/UploadProducts";
import EditProduct from "./admin/EditProduct";
import AdminLogin from "./admin/Auth/LogInPage";
import UploadToGallery from "./admin/UploadToGallery";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PUBLICROUTES.HOME} element={<Home />} />
        <Route path={PUBLICROUTES.PROPERTIES} element={<Products />} />
        <Route path={`${PUBLICROUTES.REQUEST_FORM}/:id`} element={<RequestForm />} />
        <Route path={PUBLICROUTES.ABOUT_US} element={<About />} />
        <Route path={PUBLICROUTES.CONTACT_US} element={<Contact />} />
        <Route path={PUBLICROUTES.GALLERY} element={<Gallery />} />

        <Route path={PUBLICROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={PUBLICROUTES.ADMIN} element={<LogInPage />} />
        <Route path={PUBLICROUTES.REQUESTS} element={<Requests />} />
        <Route path={PUBLICROUTES.ALL_PRODUCTS} element={<AdminProducts />} />
        <Route path={PUBLICROUTES.UPLOAD_PRODUCT} element={<UploadProducts />} />
        <Route path={PUBLICROUTES.UPLOAD_IMAGES} element={<UploadToGallery />} />

        <Route path={`${PUBLICROUTES.EDIT_PRODUCT}/:id`} element={<EditProduct />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
