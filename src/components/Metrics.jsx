import React from "react";

import Navbar from "./Navbar";
import DailyMetric from "./DailyMetric";
import MusicMetric from "./MusicMetric";
import TrendingTracks from "./TrendingTracks";
import TrendingUsers from "./TrendingUsers";
import UserActivity from "./UserActivity";

function Metrics() {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid-one">
        <DailyMetric />
        <MusicMetric />
      </div>
      <div className="grid-two">
        <TrendingTracks />
        <TrendingUsers />
        <UserActivity />
      </div>
    </div>
  );
}

export default Metrics;