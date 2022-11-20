import "./Account.css";
import "bulma/css/bulma.css";

import React, { useState, useEffect } from "react";

export default function Account() {
  //🐒
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="Account">
      <div class="content">
        {/* <p style={{ fontWeight: "700", fontSize: "40px" }}>
          Account Information
        </p> */}

        <section
          class="is-info welcome is-small"
          style={{ width: "100%", borderRadius: "10px" }}
        >
          <div class="hero-body">
            <h1 class="title">
              Hello,{" "}
              <em>
                Natalie!
                {data.firstName} {data.lastName}
              </em>
            </h1>
          </div>
        </section>
        <div className="user-profile">
          <h1 class="title" style={{ marginTop: "10px" }}>
            <em>User Profile</em>
          </h1>
          <div
            class="card mt-4"
            style={{
              width: "50%",
              margin: "center",
            }}
          >
            <div class="card-content" style={{ textAlign: "left" }}>
              <div class="columns">
                <div class="column">
                  <div class="content">
                    <p>
                      <b>First Name:</b> {data.firstName}
                    </p>
                    <p>
                      <b>Last Name:</b> {data.lastName}
                    </p>
                    <p>
                      <b>Email:</b> {data.email}
                    </p>
                    <p>{data.description}</p>
                  </div>
                </div>
                <div class="column" style={{ textAlign: "right" }}>
                  <div style={{ valign: "bottom" }}>
                    <input
                      class="button"
                      type="reset"
                      value="Edit username"
                    ></input>
                    <input
                      class="button ml-3"
                      type="reset"
                      value="Edit password"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}></div>
        </div>
      </div>

      <div className="history">
        <h1 class="title" style={{ marginTop: "10px" }}>
          <em>Pass the Glass History</em>
        </h1>
        <div style={{ width: "80%" }}>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{data.bought * 1}</p>
                  <p class="subtitle">Glasses Bought On Pass a Glass</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{data.sold * 1}</p>
                  <p class="subtitle">Glasses Sold On Pass a Glass</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">${data.bought * 180}</p>
                  <p class="subtitle">Saved by using Pass a Glass</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{Math.round(data.sold * 0.3 * 100) / 100}</p>
                  <p class="subtitle">
                    Litres of Water Saved By Getting Glasses Here
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
        <div style={{ marginBottom: "30px" }}></div>
      </div>
    </div>
  );
}
