import HomeBanner from "./HomeBanner";
import SwapGlasses from "./images/swap-glasses.jpg";
import ShopGlasses from "./images/shop-glasses1.jpg";

import "./Home.css";

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
        </p>
        <p>
          Don't know what to do with your old pair of glasses? Donate or Swap
          them!{" "}
        </p>
      </div>
      <div className="shop-swap-preview">
        <div className="row">
          <div className="col-lg-6">
            <h2>Shop</h2>
            <img
              src={ShopGlasses}
              alt="shop-glasses"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-lg-6">
            <h2>Swap</h2>
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
          <button className="btn btn-branding">Contast us</button>
        </footer>
      </div>
    </div>
  );
}
