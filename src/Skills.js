import React from "react";

export default function Skills() {
  return (
    <div>
      <h1  style={{
            color: "black",
            fontSize: "80px",
            fontFamily: "Papyrus",
           
          }}>Skills</h1>
      <div style={{ width: "600px", marginLeft: "200px" }}>
    <div style={{ height: "30px", margin: "20px" }} className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{ width: "50%" }}
      ><label>React js</label></div>
    </div>
    <div style={{ height: "30px", margin: "20px" }} className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
        role="progressbar"
        style={{ width: "50%" }}
      ><label>Node js</label></div>
    </div>
    <div style={{ height: "30px", margin: "20px" }} className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
        role="progressbar"
        style={{ width: "75%" }}
      ><label>HTML</label></div>
    </div>
    <div style={{ height: "30px", margin: "20px" }} className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
        role="progressbar"
        style={{ width: "100%" }}
      ><label>CSS</label></div>
    </div>
  </div></div>
    
  );
}
