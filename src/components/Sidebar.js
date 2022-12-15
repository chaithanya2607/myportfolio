import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{display:"relative",marginTop:"-60px"}}>
      <div style={{ backgroundColor: "	#A9A9A9" }} className="sidebar">
        <a onClick={() => navigate("/")}>About</a>
        <a onClick={() => navigate("/skills")}>Skills</a>
        <a onClick={() => navigate("/projects")}>Projects</a>
        <a onClick={() => navigate("/experience")}>Professional Experience</a>
        <a onClick={() => navigate("/intrests")}>Interests</a>
        <a onClick={() => navigate("/contactme")}>Contact Me</a>

      </div>

      <div className="content">..</div>
    </div>
  );
}
