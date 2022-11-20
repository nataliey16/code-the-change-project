import "./Account.css";
import 'bulma/css/bulma.css'

import React, { useState, useEffect } from "react";

export default function Account(){
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
    return(
      

        <div className="Account">
            <div class="content">
                <p style={{fontWeight:"700",fontSize:"40px"}}>Account Information</p>
                <section class="row-alt  is-info welcome is-small" style={{width:"80%", margin:"auto", borderRadius: "25px"}}>
                <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hello, {data.firstName} {data.lastName}
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>

                <div class="card mt-4" style={{width:"50%", margin: "left",  marginLeft:"10%", borderRadius: "15px"}}>
                    <div class="card-content" style={{textAlign: "left"}}>
                        <div class = "columns">
                            <div class="column">
                                    <div class="content">
                                        <p><b>First Name:</b> {data.firstName}</p>
                                        <p><b>Last Name:</b>  {data.lastName}</p>
                                        <p><b>Email:</b> {data.email}</p>
                                        <p>{data.description}</p>

                                    </div>
                                </div>
                            <div class="column">
                                <div style={{valign:"bottom"}}>
                                    <input class="button" type="reset" value="change username"></input>
                                    
                                    <input class="button ml-1" type="reset" value="change password"></input>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>



          <h1 class="title" style={{marginTop:"50px"}}>Account Statistics!</h1>
          <div style={{width:"80%", margin: "auto"}}>
          <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{data.bought*1}</p>
                                <p class="subtitle">Glasses Bought On Pass a Glass</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{data.sold*1}</p>
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
                                <p class="title">{Math.round(data.sold * 0.3 * 100) /100}</p>
                                <p class="subtitle">Litres of Water Saved By Getting Glasses Here</p>
                            </article>
                        </div>
                    </div>
                </section>
          </div>
          <div style={{marginBottom:"70px"}}></div>
        </div>
    )
}