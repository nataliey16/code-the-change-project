import "./Upload.css";
import "bulma/css/bulma.css";

import React, { useState, useEffect } from "react";

export default function Upload() {
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

  const uploadSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (var [key, value] of data.entries()) {
      console.log(key, value);
    }
    fetch("/uploadGlasses", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((json) => (window.location.href = "/ShopSwap"));
  };
  return (
    <div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-8 is-variable ">
              <div class="column is-two-thirds has-text-left">
                <h1 class="title is-1">Upload a Glasses</h1>
                <p class="is-size-4">
                  By donating your Glasses, you are helping another family out
                  there.{" "}
                </p>

                <form onSubmit={uploadSubmit}>
                  <div
                    style={{
                      width: "55%",
                      marginLeft: "10%",
                      marginTop: "40px",
                    }}
                  >
                    <h1 class="title">Prescription</h1>

                    <div class="field">
                      <label class="label">Sphere</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          step=".01"
                          placeholder="Left Sphere"
                          name="sphereLeft"
                          style={{ width: "50%" }}
                        ></input>
                        <input
                          class="input"
                          type="number"
                          step=".01"
                          placeholder="Right Sphere"
                          name="sphereRight"
                          style={{ width: "50%" }}
                        ></input>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">IPD</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          step=".01"
                          placeholder="Left IPD"
                          name="ipdLeft"
                          style={{ width: "50%" }}
                        ></input>
                        <input
                          class="input"
                          type="number"
                          step=".01"
                          placeholder="Right IPD"
                          name="ipdRight"
                          style={{ width: "50%" }}
                        ></input>
                      </div>
                    </div>

                    <h1 class="title">Glasses Frames</h1>

                    <div class="field">
                      <label class="label">Bridge (mm)</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          placeholder="75"
                          style={{ width: "50%" }}
                          name="bridge"
                        ></input>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Lens (mm)</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          placeholder="45"
                          style={{ width: "50%" }}
                          name="lens"
                        ></input>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Temple (mm)</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          placeholder="50"
                          style={{ width: "50%" }}
                          name="temple"
                        ></input>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Notes</label>
                      <div class="control">
                        <textarea
                          class="textarea"
                          placeholder="The glasses are smugged on the right lenses..."
                        ></textarea>
                      </div>
                    </div>

                    <div class="field">
                      <div class="control">
                        <label class="checkbox">
                          <input type="checkbox"></input>I agree to the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                    <div class="control">
                      <button class="button is-link" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card row-alt" style={{ border: "none" }}>
                <div class="card-content">
                  <p class="title">Did you know that?</p>
                </div>
                <footer
                  class=""
                  style={{
                    borderWidth: "7px",
                    width: "80%",
                    margin: "auto",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <div class="tile" style={{ display: "block", marginTop: "" }}>
                    <article class="tile is-child box">
                      <p class="title">74%</p>
                      <p class="subtitle">
                        Of families in Canada have vision impairment
                      </p>
                    </article>
                  </div>
                  <div
                    class="tile"
                    style={{ display: "block", marginTop: "20%" }}
                  >
                    <article class="tile is-child box">
                      <p class="title">2.5 billion</p>
                      <p class="subtitle">
                        who need glasses don’t have them in the world
                      </p>
                    </article>
                  </div>
                  <div
                    class="tile"
                    style={{ display: "block", marginTop: "20%" }}
                  >
                    <article class="tile is-child box">
                      <p class="title">90%</p>
                      <p class="subtitle">
                        of peoply needlessly affected by poor vision live in the
                        developing world
                      </p>
                    </article>
                  </div>
                  <div
                    class="tile"
                    style={{ display: "block", marginTop: "20%" }}
                  >
                    <article class="tile is-child box">
                      <p class="title">$200</p>
                      <p class="subtitle">is the average cost of new glasses</p>
                    </article>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
