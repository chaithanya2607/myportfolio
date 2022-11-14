import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "	#A9A9A9", position: "relative" }}>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a style={{ color: "black" }} class="nav-link" href="#">
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a style={{ color: "black" }} class="nav-link" href="#">
            Github
          </a>
        </li>
        <li class="nav-item">
          <a
            style={{ color: "black" }}
            class="nav-link"
            href="https://www.linkedin.com/in/chaithanya-r-b9b74712a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li class="nav-item">
          <a style={{ color: "black" }} class="nav-link" href="#">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
