import "./Mission.css";
export default function Mission() {
  return (
    <div className="Mission">
      <div className="background-img">
        <h1>
          A Sustainable
          <br />
          way to find
          <br />
          your Glasses.
        </h1>
      </div>
      <div className="card" style={{ border: "none" }}>
        <div className="card-content">
          <p className="title"> Did you know... </p>
        </div>
        <footer
          style={{
            borderWidth: "7px",
            width: "40%",
            margin: "auto",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div className="tile" style={{ display: "block", marginTop: "" }}>
            <article className="tile is-child box">
              <i class="fa-solid fa-people-roof"></i>
              <p className="title">74%</p>
              <p className="subtitle">
                Of families in Canada have vision impairment{" "}
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <i class="fa-solid fa-earth-americas"></i>
              <p className="title">2.5 billion</p>
              <p className="subtitle">
                who need glasses don’t have them in the world
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <i class="fa-solid fa-glasses"></i>
              <p className="title">90%</p>
              <p className="subtitle">
                of peoply needlessly affected by poor vision live in the
                developing world
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <i class="fa-solid fa-dollar-sign"></i>
              <p className="title">$200</p>
              <p className="subtitle">is the average cost of new glasses</p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <i class="fa-solid fa-seedling"></i>
              <p className="title"> Environment</p>
              <p className="subtitle">
                Our eyewear generally only lasts us a few years at most, leading
                to millions of frames ending up in landfills every year.{" "}
              </p>
            </article>
          </div>
        </footer>
      </div>
      <div className="impact">
        <div className="title-impact">Who We Are</div>
        <p className="subtitle">
          We at Pass the Glass offer a sustainable and affordable way to find
          the perfect pair of glasses for you. We prioritze healthly vision for
          everyone while minimizing the impacts of cost and accessibility. We
          are also committed to protecting our planet by reducing millions of
          glasses that end up in our landfills and produce pollution.
        </p>
      </div>
    </div>
  );
}
