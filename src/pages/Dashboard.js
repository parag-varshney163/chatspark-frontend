// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import AnalyticsCards from "../components/AnalyticsCards";
import colors from "../constants/colors";
import TrendSection from "../components/TrendSection";
import ReviewCards from "../components/ReviewCards";
import PerformanceCards from "../components/PerformanceCards";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen flex text-white"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.secondary})`,
      }}
    >
      <Sidebar />
      <main className="flex-1 p-6 md:ml-20">
        <Navbar />
        <StatsCards />
        <AnalyticsCards />
        <TrendSection/>
        <ReviewCards/>
        <PerformanceCards/>
      </main>
    </div>
  );
};

export default Dashboard;
