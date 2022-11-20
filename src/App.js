import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Howitworks from "./routes/Howitworks";
import Mission from "./routes/Mission";
import Shop from "./routes/Shop";
import Account from "./routes/Account";

import Upload from "./routes/Upload";

function App() {
  return (
    <div className="App container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" title="home-page">
            <i className="fa-solid fa-glasses"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to="/Howitworks" className="nav-link active">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="nav-link active">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/Upload" className="nav-link active">
                  Upload Glasses
                </Link>
              </li>
              <li>
                <Link to="/Mission" className="nav-link active">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/Account" className="nav-link active">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Howitworks" element={<Howitworks />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Mission" element={<Mission />}></Route>
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
      </Routes>
    </div>
  );
}

export default App;
