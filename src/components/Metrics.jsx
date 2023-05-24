import React from "react";

import Navbar from "./Navbar";
import DailyMetric from "./DailyMetric";

function Metrics() {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid-one">
        <DailyMetric />
      </div>
      <div className="grid-two">
      </div>
    </div>
  );
}

export default Metrics;