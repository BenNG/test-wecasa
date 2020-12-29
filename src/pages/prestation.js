import { Link } from "react-router-dom";
import React from "react";
const Prestation = () => {
  return (
    <div className="container mx-auto">
      <div>Prestation !</div>
      <div className="h-4"></div>
      <Link to="/address">
        <button
          className="bg-orange px-5 py-1 rounded-full text-white"
          type="button"
        >
          Next
        </button>
      </Link>
    </div>
  );
};
export default Prestation;
