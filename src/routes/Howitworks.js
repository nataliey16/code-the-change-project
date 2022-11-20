import React from "react";
import "./Howitworks.css";

export default function Howitworks() {
  return (
    <div className="Howitworks">
      <div className="background-img">
        <h1>How it Works</h1>
      </div>
      <section className="shop-section">
        <h2>Shop the Glasses</h2>
        <p>Looking for your first pair of sustainable eyewear?</p>
        <div className="row shop-steps">
          <div className="col-md-3 light">
            <i class="fa-solid fa-eye"></i>
            <br />
            1.Take an eye exam
          </div>
          <div className="col-md-3 dark">
            <i class="fa-solid fa-keyboard"></i>
            <br />
            2. Select <strong> Shop </strong>
            <br /> & input your results
          </div>
          <div className="col-md-3 light">
            <i class="fa-solid fa-magnifying-glass"></i>
            <br />
            3. Based on your results, we will find you a match of sustainable
            glasses!
          </div>
          <div className="col-md-3 dark">
            <i class="fa-solid fa-list-ul"></i>
            <br />
            4. Voila! <br />A curated list of glasses to choose
          </div>
        </div>
      </section>
    </div>
  );
}
