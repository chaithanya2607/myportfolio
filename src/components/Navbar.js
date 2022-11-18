import React from "react";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "	#A9A9A9" }} className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto ">
      <a style={{ color: "black" }} className="nav-link active" href="#">Resume</a>
      <a  style={{ color: "black" }} className="nav-link"  href="https://github.com/chaithanya2607" target="_blank">Github</a>
      <a  style={{ color: "black" }} className="nav-link" href="https://www.linkedin.com/in/chaithanya-r-b9b74712a/" target="_blank">LinkedIn</a>
      <a  style={{ color: "black" }} className="nav-link " href="https://www.instagram.com/chaithanya_rao_r/" target="_blank">Instagram</a>
    </div>
  </div>
</nav>
  );
}
