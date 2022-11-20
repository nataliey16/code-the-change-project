import React, { useState, useEffect } from "react";
import "./View.css";
import "bulma/css/bulma.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from 'react-router-dom';


export default function ShopSwap()
{

  const location = useLocation();
  const [glass, setGlass] = useState({});
  const [yours, setYours] = useState({});
  const [similarity, setSimilarity] = useState(false);
  useEffect(() =>
  {
    const glasses = location.state.glass
    const yours = location.state.yours
    const similarity = location.state.similarity
    setGlass(glasses);
    setYours(yours);
    setSimilarity(similarity);
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>

      <div className="row individual-results">
        <div className="col-lg-6"><img
          src={glass.image}
          alt="Glasses"
          className="img-fluid"
        ></img><br/><br/>
        <button>Message</button>    <button>Purchase</button>
        </div>

        <div className="col-lg-6 glasses-detail">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <b>
                  <u>Sphere</u>
                </b>
              </div>
              <div class="container">
                  <div class="flex-item">
                    Left: {glass.sphereLeft}<br/>Right: {glass.sphereRight}
                  </div>
                  {similarity ? 
                  <div class="flex-item">
                    Yours: {yours.sphereLeft}<br/>Yours: {yours.sphereRight}
                  </div> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <b>
                  <u>IPD</u>
                </b>
                    </div>
              <div class="container">
                  <div class="flex-item">
                    Left: {glass.ipdLeft}<br/>Right: {glass.ipdRight}
                  </div>
                  
                  {similarity ? <div class="flex-item">
                    Yours: {yours.ipdLeft}<br/>Yours: {yours.ipdRight}
                  </div> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <b>
                  <u>Frame</u>
                </b>
              </div>
              <div class="container">
                  <div class="flex-item">
                    Bridge: {glass.bridge}<br/>Lens: {glass.lens}<br/>Temple: {glass.temple}
                  </div>
                  {similarity ? 
                  <div class="flex-item">
                    Yours: {yours.bridge}<br/>Yours: {yours.lens}<br/>Yours: {yours.temple}
                  </div> : null}
              </div>
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
          </div><br></br>
          {glass.similarity ?
          <div style={{fontSize:'20px'}}>Match: {100 - Math.round(glass.similarity * 100)}%</div> : null}<br/>
          <div>
            <b><u>Location</u></b><br/>{glass.location}
          </div><br/><div>
            <b><u>Notes</u></b><br/>{glass.notes}
          </div>
        </div>
      </div>
    </div>
  )
};