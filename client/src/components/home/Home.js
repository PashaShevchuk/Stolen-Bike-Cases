import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">

        <Link to="/">
          <h1 className="text-center">Stolen Bike</h1>
        </Link>

        <div className="d-flex justify-content-around">

          <div>
            <Link to="/report">
              <h4>Report bike theft</h4>
            </Link>
          </div>

          <div>
            <Link to="/officer">
              <h4>For police officers</h4>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
