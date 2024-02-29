import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  return (
    <DashboardSytled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
          </div>
        </div>
      </InnerLayout>
    </DashboardSytled>
  );
};

const DashboardSytled = styled.div``;

export default Dashboard;
