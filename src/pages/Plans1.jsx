import React from "react";
import {
  DashboardCard01,
  DashboardInfo,
  DashboardMap,
  DashboardTable,
  Header,
  WelcomeBanner,
} from "../components";
import { NewsData, ReturnData } from "../utils/data";
import Target from "../partials/Target";

const Plans = () => {
  return (
    <>
      {/* site title */}
      <WelcomeBanner title={"california public employess retirement system"} />

      {/* Cards */}
      <div className="max-w-7xl mx-auto w-full px-2 md:px-5 space-y-8 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Line chart (Acme Plus) */}
          {[...Array(3)].map((item, idx) => (
            <DashboardCard01 key={idx} />
          ))}
        </div>

        {/* map and info */}
        <div className="grid grid-cols-3 gap-4">
          <DashboardInfo />
          <DashboardMap />
        </div>

        {/* table */}
        <DashboardTable data={[]} title="tasks" />
        {/* returns */}
        <DashboardTable data={ReturnData} title="returns" open={true} />
        {/* plan contacts */}
        <DashboardTable data={ReturnData} title="plan contacts" />
        {/* consultants */}
        <DashboardTable data={ReturnData} title="consultants" />
        {/* mandates */}
        <DashboardTable data={ReturnData} title="mandates" />
        {/* manager roster */}
        <DashboardTable data={ReturnData} title="manager roster" />

        <Target data={NewsData} />
      </div>
    </>
  );
};

export default Plans;
