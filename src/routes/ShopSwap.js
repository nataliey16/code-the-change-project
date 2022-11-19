import React, { useState, useEffect } from "react";
import "./ShopSwap.css";
import "bulma/css/bulma.css";
import ShopGlasses from "./images/shop-glasses.jpg";

export default function ShopSwap() {
  const [glasses, setGlasses] = useState([{}]);
  useEffect(() => {
    fetch("/eyewear")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGlasses(data);
        console.log(glasses);
        console.log(glasses[0]);
      });
  }, []);

  return (
    <div className="ShopSwap container-fluid">
      <div className="background-img">
        <h2>Shop: Shop N Swap</h2>
      </div>
      <br />
      <h1>Enter your measurements</h1>
      <form>
        <div className="measurements-left">
          <label className="prescription-label">
            OD
            <br />
            (Right)
          </label>{" "}
          <input type="text"></input>
          <input type="text"></input>
        </div>
      </form>
      <form>
        <div className="measurements-right">
          <label className="prescription-label me-2">
            OD
            <br />
            (Left)
          </label>{" "}
          <input type="text"></input>
          <input type="text"></input>
        </div>
      </form>

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
      {glasses.map(function (glass, idx) {
        return (
          <div class="card" style={{ width: "80%", margin: "auto" }}>
            <div className="row shop-glasses">
              <div className="col-lg-6">
                <img
                  src={ShopGlasses}
                  alt="Glasses"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-lg-6 glasses-detail">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>Sphere</u>
                      </b>
                    </div>
                    <div>Left: {glass.sphereLeft}</div>
                    <div>Right: {glass.sphereRight}</div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>IPD</u>
                      </b>
                    </div>
                    <div>Left: {glass.ipdLeft}</div>
                    <div>Right: {glass.ipdRight}</div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>Frame</u>
                      </b>
                    </div>
                    <div>Bridge: {glass.bridge}</div>
                    <div>Lens: {glass.lens}</div>
                    <div>Temple: {glass.temple}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>Distance</u>
                      </b>
                    </div>
                    <div>{glass.notes}</div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>Price</u>
                      </b>
                    </div>
                    <div>{glass.price}</div>
                  </div>
                  <div className="col-lg-4 mt-3">
                    <button>View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
