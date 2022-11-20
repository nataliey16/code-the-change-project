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
      <section className="swap-section">
        <h2>Donate the Glasses</h2>
        <p>Not sure what to do with your old glasses? Donate!</p>
        <div className="row shop-steps">
          <div className="col-md-4 light-swap">
            <i class="fa-solid fa-arrow-pointer"></i> <br />
            2. Select <strong> Swap or Donate </strong>
          </div>
          <div className="col-md-4 dark-swap">
            <i class="fa-solid fa-keyboard"></i>
            <br />
            2. Input the prescription of your
            <br /> old pair of glasses
          </div>
          <div className="col-md-4 light-swap">
            <i class="fa-solid fa-house"></i> <br />
            3. Ta da!
            <br />
            Your glasses are awaiting their new owner!
          </div>
        </div>
        <h2 className="mt-5">Swap the Glasses</h2>
        <p>
          Need an upgrade? Swap!
          <ul>
            <li>1. Donate first</li>
            <li>2. Then select Shop to shop!</li>
          </ul>
        </p>
      </section>
    </div>
  );
}
