import React from "react";
import { Link } from "react-router-dom";
const Address = () => {
  return (
    <div className="container mx-auto">
      <div>Address !</div>
      <div className="h-4"></div>
      <Link to="/appointment">
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
export default Address;
