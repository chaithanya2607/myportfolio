import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "	", position: "relative" }}>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a style={{ color: "black" }} className="nav-link" href="#">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color: "black" }} className="nav-link" href="https://github.com/chaithanya2607">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/chaithanya-r-b9b74712a/"
            target="_blank"
            style={{ color: "black" }}
            className="nav-link"
          >
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color: "black" }} className="nav-link" href="#">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
