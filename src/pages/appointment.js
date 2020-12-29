import { Link } from "react-router-dom";
import React from "react";
const Appointment = () => {
  return (
    <div className="container mx-auto">
      <div>Appointment !</div>
      <div className="h-4"></div>
      <Link to="/confirmation">
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
export default Appointment;
