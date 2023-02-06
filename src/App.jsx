import { Routes, Route } from "react-router-dom";
import "./App.scss";

// pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Journey from "./pages/journey/Journey";
import ProductDetails from "./pages/product-details/ProductDetails";
import Store from "./pages/store/Store";
import Team from "./pages/team/Team";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
