import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { prestations, priceTotal, durationTotal, address } = useSelector(
    (state) => state.basket
  );
  let { pathname } = useLocation();

  const basketDestination =
    pathname === "/prestation" ? "/address" : "appointment";

  const somePrestationWereSelected =
    Array.isArray(prestations) && prestations.length > 0;

  let isButtonDisabled;
  if (pathname === "/prestation" && somePrestationWereSelected) {
    isButtonDisabled = false;
  } else if (pathname === "/address" && address) {
    isButtonDisabled = false;
  } else {
    isButtonDisabled = true;
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <header className="bg-orange text-white py-3">
        <div className="container mx-auto font-semibold uppercase">
          Welcome to test-wecasa
        </div>
      </header>
      <div className="overflow-y-auto h-full">{children}</div>
      {console.log("pathname", pathname)}
      {(pathname === "/prestation" || pathname === "/address") &&
      Array.isArray(prestations) &&
      prestations.length > 0 ? (
        <footer className="bg-white mt-3 px-3 py-4">
          <div className="container mx-auto flex justify-between">
            <div className="flex">
              <div className="flex mr-3">
                <div className="text-gray-900 font-semibold mr-3">
                  Total price:
                </div>
                {priceTotal / 100}€
              </div>
              &bull;
              <div className="flex ml-3">
                <div className="text-gray-900 font-semibold mr-3">
                  Total duration:
                </div>
                {durationTotal}min
              </div>
            </div>

            <Link to={basketDestination}>
              <button
                disabled={isButtonDisabled}
                className={` px-5 py-1 rounded-full text-white ${
                  isButtonDisabled ? "bg-gray-300" : "bg-orange"
                }`}
                type="button"
              >
                Next
              </button>
            </Link>
          </div>
        </footer>
      ) : null}
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
