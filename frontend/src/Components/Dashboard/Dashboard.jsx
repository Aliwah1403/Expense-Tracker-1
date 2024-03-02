import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";
import History from "../History/History";

const Dashboard = () => {
  const {
    totalIncome,
    incomes,
    expenses,
    totalExpense,
    totalBalance,
    getIncome,
    getExpense,
  } = useGlobalContext();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <DashboardSytled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="income-title">
              Min <span>Income</span>Max
            </h2>
            <div className="income-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>

            <h2 className="income-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="income-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardSytled>
  );
};

const DashboardSytled = styled.div``;

export default Dashboard;
