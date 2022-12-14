import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Howitworks from "./routes/Howitworks";
import Mission from "./routes/Mission";
import Account from "./routes/Account";
import View from "./routes/View";

import TheHatchText from "./routes/images/The Hatch Finals_Text Only_small.png";
import Upload from './routes/Upload';
import Exam from './routes/Exam';
import Shop from "./routes/Shop";

import Footer from "./Footer";

function App() {
  return (
    <div className="App container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" title="home-page">
            <i className="fa-solid fa-glasses"></i>
            <h1>Pass The Glass</h1>
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
                <Link to="/Mission" className="nav-link active">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/Exam" className="nav-link active">
                  Exam
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="nav-link active">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/Upload" className="nav-link active">
                  Donate N Swap
                </Link>
              </li>

              <li>
                <Link to="/Account" className="nav-link active">
                  <i className="nav-icon fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Howitworks" element={<Howitworks />}></Route>
        <Route path="/Mission" element={<Mission />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/Exam" element={<Exam />}></Route>
  
        <Route path="/View" element={<View />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
