import "./Mission.css";
export default function Mission() {
  return (
    <div className="Mission">
      <div className="background-img">
        <h1>
          A Cleaner
          <br />
          way to
          <br />
          The Glass
        </h1>
      </div>
      <div className="card" style={{ border: "none" }}>
        <div className="card-content">
          <p className="title">Did you know that?</p>
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
              <p className="title">74%</p>
              <p className="subtitle">
                Of families in Canada have vision impairment
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <p className="title">2.5 billion</p>
              <p className="subtitle">
                who need glasses don’t have them in the world
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <p className="title">90%</p>
              <p className="subtitle">
                of peoply needlessly affected by poor vision live in the
                developing world
              </p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <p className="title">$200</p>
              <p className="subtitle">is the average cost of new glasses</p>
            </article>
          </div>
          <div className="tile" style={{ display: "block", marginTop: "10%" }}>
            <article className="tile is-child box">
              <p className="title">Environment</p>
              <p className="subtitle">Add fact here</p>
            </article>
          </div>
        </footer>
      </div>
    </div>
  );
}
