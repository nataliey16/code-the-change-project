
import "./Exam.css";
import { Recorder } from "react-voice-recorder";
import SnellenChart from "./images/chart.png";
import "react-voice-recorder/dist/index.css";

import React, { useState, useEffect } from "react";
import "react-voice-recorder/dist/index.css";

export default class Exam extends React.Component {
    

    constructor(props) {
      super(props);
      this.result = {test:""};
      this.state = {
        audioURL: null,
        audioDetails: {
          url: null,
          blob: null,
          chunks: null,
          duration: {
            h: 0,
            m: 0,
            s: 0
          }
        }
      };
    }
    handleAudioStop(data) {
      console.log(data);
      this.setState({ audioDetails: data });
      //console.log(data);
    }
    handleAudioUpload(file) {
      console.log(file);

		  var xhr=new XMLHttpRequest();
		  xhr.onload=(e) => {
            console.log("Server returned: ",e.target.responseText);
            this.result.test = e.target.responseText;
            this.setState({
              result: e.target.responseText
            })

		      
		  };
		  var fd=new FormData();
		  fd.append("file",file, "file");
		  xhr.open("POST","/exam",true);
		  xhr.send(fd);

    }
    handleRest() {
      const reset = {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      };
      this.setState({ audioDetails: reset });
    }
    render() {
      return (
        <div>
          <section class="row-alt  is-info welcome is-small" style={{width:"80%", margin:"auto", borderRadius: "25px"}}>
          <div class="hero-body">
                  <div class="container">
                      <h1 class="title">
                          Visual Acuity Test

                      </h1>
                  </div>
              </div>
          </section>
          <section className="info-tiles" style={{marginTop:"55px", width:"95%", marginLeft:"auto",marginRight:"auto"}}>
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">Look at the Chart</p>
                          <p class="subtitle">Try to get it to scale. There is a quarter for reference in the picture</p>
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">Press Record</p>
                          <p class="subtitle">Allow the computer to use your microphone</p>
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">Read the Direction</p>
                          <p class="subtitle">Say each direction out loud and clearly. Directions: "right","left","up","down"</p>
                      </article>
                  </div>
              </div>
          </section>
          <section class="info-tiles" style={{marginTop:"15px", width:"95%", marginLeft:"auto",marginRight:"auto"}}>
              <div class="tile is-ancestor has-text-centered">
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">say "Skip"</p>
                          <p class="subtitle">to <b>skip</b> to the next direction if you are stuck</p>
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">End the recording</p>
                          <p class="subtitle">The program will rate your eye severity and provide the transcript</p>
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">Get the results!</p>
                          <p class="subtitle">The program can help provide a prescription!</p>
                      </article>
                  </div>
              </div>
          </section>

          <img src={SnellenChart} style={{marginTop:"25px"}}></img>

          <section class="row-alt  is-info welcome is-small" style={{width:"80%", margin:"auto", borderRadius: "25px"}}>
          <div class="hero-body">
                  <div class="container" style={{lineHeight:"40px"}}>
                      <h2 class="title" style={{lineHeight:"40px",verticalAlign:"middle",position:"absolute",top:"40%", textAlign:"left"}}>
                          <b>Your 20/20 measure is:</b>
                          <br></br>
                          {
                            this.result.test ? <p>{this.result.test}</p>: <p>Take a test to see your results!</p>
                          }
                      </h2>

                      <table class="table" style={{marginLeft:"65%", width:"50%"}}>
                      <thead>
                          <tr>
                            <th>20/20 Measure</th>
                            <th>Diopter Measure (minus)</th>
                            <th>Distance (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <th>20/200</th>
                          <th>2.50</th>
                          <th>16</th>
                        </tr>
                        <tr>
                          <th>20/100</th>
                          <th>1.50</th>
                          <th>26</th>
                        </tr>
                        <tr>
                          <th>20/70</th>
                          <th>1.25</th>
                          <th>31</th>
                        </tr>
                        <tr>
                          <th>20/50</th>
                          <th>1.00</th>
                          <th>39</th>
                        </tr>
                        <tr>
                          <th>20/40</th>
                          <th>0.75</th>
                          <th>52</th>
                        </tr>
                        <tr>
                          <th>20/30</th>
                          <th>0.50</th>
                          <th>79</th>
                        </tr>
                        <tr>
                          <th>20/20</th>
                          <th>0.00</th>
                          <th>∞ (infinity)</th>
                        </tr>

                        </tbody>
                      </table>
                  </div>
              </div>
          </section>
          <Recorder
            record={true}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            
            handleAudioStop={(data) => this.handleAudioStop(data)}
            handleAudioUpload={(data) => this.handleAudioUpload(data)}
            handleRest={() => this.handleRest()}
            
          />

        </div>
      );
    }
  }