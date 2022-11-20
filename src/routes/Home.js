import HomeBanner from "./HomeBanner";
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
    </div>
  );
}
