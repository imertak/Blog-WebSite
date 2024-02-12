import React from "react";
import "./CustomFooter.css";
import { Link } from "react-router-dom";

function CustomFooter() {
  return (
    <div className="footer">
      <h1 className="title">
        Create, Explore & Collect Abstract <br></br> NFT's
      </h1>
      <div className="links">
        <Link>Privacy Policy</Link>
        <Link>Cooperation</Link>
        <Link>Sponsorship</Link>
        <Link>Contact Us</Link>
      </div>
      <div className="social-medias">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <p>Copyright © 2024 HardSoft All Rights Reserved.</p>
    </div>
  );
}

export default CustomFooter;
