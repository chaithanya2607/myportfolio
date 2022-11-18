import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{display:"relative",marginTop:"-60px"}}>
      <div style={{ backgroundColor: "	#A9A9A9" }} className="sidebar">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/projects")}>Projects</a>
        <a onClick={() => navigate("/skills")}>Skills</a>
        <a onClick={() => navigate("/contactme")}>Contact me</a>
      </div>

      <div className="content">..</div>
    </div>
  );
}
