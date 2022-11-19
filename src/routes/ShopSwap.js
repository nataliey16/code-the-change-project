import React from "react";
import "./ShopSwap.css";
import ShopGlasses from "./images/shop-glasses.jpg";

export default function ShopSwap() {
  return (
    <div className="ShopSwap container-fluid">
      <div className="background-img">
        <h2>Shop: Shop N Swap</h2>
      </div>
      <h1>Enter your measurements</h1>
      <div className="measurements-left">
        <label className="prescription-label">
          OD
          <br />
          (Right)
        </label>{" "}
        <input type="input"></input>
        <input type="input"></input>
      </div>
      <div className="measurements-right">
        <label className="prescription-label me-2">
          OD
          <br />
          (Left)
        </label>{" "}
        <input type="input"></input>
        <input type="input"></input>
      </div>

      <div className="row shop-glasses">
        <div className="col-lg-6">
          <img src={ShopGlasses} alt="Glasses" className="img-fluid"></img>
        </div>
        <div className="col-lg-6 glasses-detail">
          <div className="row">
            <div className="col-lg-4">
              <div>Sphere</div>
              <div>Left:-1.00</div>
              <div>Right:+1.00</div>
            </div>
            <div className="col-lg-4">
              <div>IPD</div>
              <div>Left: 32.0</div>
              <div>Right: 32.0</div>
            </div>
            <div className="col-lg-4">
              <div>Frame</div>
              <div>Bridge: 22</div>
              <div>Lens: 49</div>
              <div>Temple: 150</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div>Distance</div>
              <div>Left:-1.00</div>
            </div>
            <div className="col-lg-4">
              <div>Price</div>
              <div>$9.99</div>
            </div>
            <div className="col-lg-4 mt-3">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row shop-glasses">
        <div className="col-lg-6">
          <img src={ShopGlasses} alt="Glasses" className="img-fluid"></img>
        </div>
        <div className="col-lg-6 glasses-detail">
          <div className="row">
            <div className="col-lg-4">
              <div>Sphere</div>
              <div>Left:-1.00</div>
              <div>Right:+1.00</div>
            </div>
            <div className="col-lg-4">
              <div>IPD</div>
              <div>Left: 32.0</div>
              <div>Right: 32.0</div>
            </div>
            <div className="col-lg-4">
              <div>Frame</div>
              <div>Bridge: 22</div>
              <div>Lens: 49</div>
              <div>Temple: 150</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div>Distance</div>
              <div>Left:-1.00</div>
            </div>
            <div className="col-lg-4">
              <div>Price</div>
              <div>$9.99</div>
            </div>
            <div className="col-lg-4 mt-3">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
