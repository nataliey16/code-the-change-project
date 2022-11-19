import React from "react";
import "./ShopSwap.css";
import ShopGlasses from "./images/shop-glasses.jpg";

export default function ShopSwap() {
  return (
    <div className="ShopSwap container-fluid">
      <div className="background-img">
        <h2>Shop N Swap</h2>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <img src={ShopGlasses} alt="Glasses" className="img-fluid"></img>
        </div>
        <div className="col-lg-3">
          <div>Sphere</div>
          <div>Left:-1.00</div>
          <div>Right:+1.00</div>
        </div>
        <div className="col-lg-3">
          <div>IPD</div>
          <div>Left: 32.0</div>
          <div>Right: 32.0</div>
        </div>
        <div className="col-lg-3">
          <div>Frame</div>
          <div>Bridge: 22</div>
          <div>Lens: 49</div>
          <div>Temple: 150</div>
        </div>
      </div>
      <div className="row "></div>
    </div>
  );
}
