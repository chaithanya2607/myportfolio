import React from 'react'

export default function Intrests() {
  return (
    <div>
      <h1
        style={{
          color: "black",
          fontSize: "50px",
          fontFamily: "Papyrus",
        }}
      >
        Intrests
      </h1>
      <div style={{ width: "600px", marginLeft: "200px" }}>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Drawing</label>
          </div>
        </div>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Astrology</label>
          </div>
        </div>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Tarot Reading</label>
          </div>
        </div>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Painting</label>
          </div>
        </div>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Teaching</label>
          </div>
        </div>
        <div style={{ height: "30px", margin: "20px" }} className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style={{ width: "100%" }}
          >
            <label>Singing</label>
          </div>
        </div>
       
      
      </div>
    </div>
  )
}
