import React from 'react';
import { Link } from "react-router-dom";

function Hello() {
  return (
    <Link to="/displayRegistration">
    <h1
      className="text-3xl font-bold underline text-center"
      style={{ color: '#45B39D', marginTop: '200px' }}
    >
      Hello world!
    </h1> </Link>
  );
}

export default Hello;
