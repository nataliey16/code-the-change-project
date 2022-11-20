import HomeBanner from "./HomeBanner";
import SwapGlasses from "./images/swap-glasses.jpg";
import ShopGlasses from "./images/shop-glasses1.jpg";

import "./Home.css";
import { Link, Route, Routes } from "react-router-dom";
import Howitworks from "./Howitworks";
import Shop from "./Shop";
import Upload from "./Upload";

export default function Home() {
  return (
    <div className="Home">
      <HomeBanner />
      <div className="how-it-works">
        <h1>
          <i className="fa-solid fa-glasses"></i>How it Works
          <i className="fa-solid fa-glasses"></i>
        </h1>
        <p>
          Looking for an affordable & sustainable pair of glasses? Input your
          measurements and find your match!
          <br />
          Don't know what to do with your old pair of glasses? Donate or Swap
          them!{" "}
        </p>
        <Link to="/Howitworks" className="nav-link active">
          <button className="btn btn-branding">Learn more</button>
        </Link>
      </div>
      <div className="shop-swap-preview">
        <div className="row">
          <div className="col-lg-6">
            <Link to="/Shop" className="nav-link active">
              <h2>Shop</h2>
            </Link>
            <img
              src={ShopGlasses}
              alt="shop-glasses"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-lg-6">
            <Link to="/Upload" className="nav-link active">
              <h2>Swap</h2>
            </Link>
            <img
              src={SwapGlasses}
              alt="swap-glasses"
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <i className="fa-solid fa-glasses footer-icon"></i>
          <button className="btn btn-branding">Contact us</button>
        </footer>
      </div>

      <Routes>
        <Route path="/Howitworks" element={<Howitworks />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
      </Routes>
    </div>
  );
}
