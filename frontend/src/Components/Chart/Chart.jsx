import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((income) => {
      const { date } = income;
      return dateFormat(date);
    }),

    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((inc) => {
            const { amount } = inc;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expense",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: var(--shadow-style);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
