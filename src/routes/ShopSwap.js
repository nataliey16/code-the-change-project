import React, { useState, useEffect } from "react";
import "./ShopSwap.css";
import "bulma/css/bulma.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function ShopSwap() {
  const [glasses, setGlasses] = useState([{}]);

  const [ipdLeft, setIpdLeft] = useState("31.0");
  const [ipdRight, setIpdRight] = useState("33.0");
  const [sphereLeft, setSphereLeft] = useState("-1.00");
  const [sphereRight, setSphereRight] = useState("-1.75");

  const [bridge, setBridge] = useState("24");
  const [lens, setLens] = useState("53");
  const [temple, setTemple] = useState("155");

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

  const refreshGlasses = async () => {
    console.log(sphereRight);
    fetch("/eyewear", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sphereLeft: sphereLeft,
        sphereRight: sphereRight,
        ipdLeft: ipdLeft,
        ipdRight: ipdRight,
        bridge: bridge,
        lens: lens,
        temple: temple,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGlasses(data);
        console.log(glasses);
        console.log(glasses[0]);
      });
  };

  return (
    <div className="ShopSwap container-fluid">
      <div className="background-img">
        <h1>
          <small>Shop</small>
          The Glass
        </h1>
        <p>Shop for afforable glasses near you</p>
      </div>
      <h2 className="text-center">Enter your measurements</h2>

      <div className="shop-details">
        <div
          style={{
            width: "55%",
            paddingTop: "70px",
            paddingBottom: "70px",
            marginBottom: "30px",
            marginLeft: "330px",
            textAlign: "center",
          }}
        >
          <h3 className="title">Prescription</h3>

          <div className="field">
            <label className="label">Sphere</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Left Sphere"
                onChange={(event) => {
                  setSphereRight(event.target.value);
                }}
                style={{ width: "50%" }}
                defaultValue="-1.75"
              ></input>
              <input
                className="input"
                type="number"
                placeholder="Right Sphere"
                onChange={(event) => {
                  setIpdRight(event.target.value);
                }}
                defaultValue="33.0"
                style={{ width: "50%" }}
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">IPD</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Left IPD"
                onChange={(event) => {
                  setSphereLeft(event.target.value);
                }}
                defaultValue="-1.00"
                style={{ width: "50%" }}
              ></input>

              <input
                className="input"
                type="number"
                placeholder="Right IPD"
                onChange={(event) => {
                  setIpdLeft(event.target.value);
                }}
                defaultValue="31.0"
                style={{ width: "50%" }}
              ></input>
            </div>
          </div>

          <h3 className="title">Glasses Frames</h3>

          <div className="field">
            <label className="label">Bridge (mm)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                onChange={(event) => {
                  setBridge(event.target.value);
                }}
                defaultValue="24"
                style={{ width: "50%" }}
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Lens (mm)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                onChange={(event) => {
                  setLens(event.target.value);
                }}
                defaultValue="49"
                style={{ width: "50%" }}
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Temple (mm)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                onChange={(event) => {
                  setTemple(event.target.value);
                }}
                defaultValue="150"
                style={{ width: "50%" }}
              ></input>
            </div>
          </div>
          <button className="button is-link" onClick={refreshGlasses}>
            Refresh
          </button>
        </div>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success">Sort by</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/#">input value</Dropdown.Item>
          <Dropdown.Item href="/#">input value</Dropdown.Item>
          <Dropdown.Item href="/#">input value</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {glasses.map(function (glass, idx) {
        return (
          <div
            className="group-results"
            style={{ width: "80%", margin: "auto", marginTop: "40px" }}
          >
            <div className="row individual-results">
              <div className="col-lg-6">
                <img
                  src={glass.image}
                  alt="Glasses"
                  className="img-fluid"
                ></img>
                {glass.similarity ? (
                  <div
                    className="row"
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "20px",
                    }}
                  >
                    <div className="col-xs-12">
                      Match: {Math.round(glass.similarity * 100)}%
                    </div>
                  </div>
                ) : null}
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
                    <div>{glass.distance}</div>
                  </div>
                  <div className="col-lg-4">
                    <div>
                      <b>
                        <u>Price</u>
                      </b>
                    </div>
                    <div>${glass.price}</div>
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
