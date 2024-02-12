import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        DailyCar
      </Link>

      <div className="links">
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Blog</Link>
        <Link>About</Link>
      </div>

      <div className="login">
        <Link to="/giris">
          <button className="sign-in">Login</button>
        </Link>
        <Link to="/kayit">
          <button className="sign-up">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default CustomNavbar;
