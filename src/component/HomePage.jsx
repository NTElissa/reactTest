import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
export function Add() {
  return (
    <body>
      <div>
        
        <nav>
            <Link to="/DisplayImage">
          <li> Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </nav>
      </div>
      <h1>hello word </h1>
    </body>
  );
}
