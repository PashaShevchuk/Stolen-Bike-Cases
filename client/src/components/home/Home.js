import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Home page</h1>
        <div>
          <div><Link to="/officer">Officer</Link></div>
          <div><Link to="/report">Report</Link></div>
        </div>
      </div>
    </div>
  );
};
