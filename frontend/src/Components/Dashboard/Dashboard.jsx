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
                <p
                  style={{
                    color:
                      totalExpense() > totalIncome( ) ? "red" : "var(--color-green)",
                  }}
                >
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

            <h2 className="expense-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="expense-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardSytled>
  );
};

const DashboardSytled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: var(--shadow-style);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2 /4;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          p {
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .income-title,
      .expense-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .income-item,
      .expense-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
