import React from "react";
import { NavbarMinimal } from "../../Components/Navbar/NavbarMinimal.tsx";
import { StatsRingCard } from "../../Components/ProjectTasks/StatsRingCard.tsx";
import classes from "./Analytics.module.css";

const Analytics: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarMinimal />
      <div className="dashboard-content">
        <h1 className={classes.title}>Team Analytics</h1>
        <StatsRingCard />
      </div>
    </div>
  );
};

export default Analytics;
