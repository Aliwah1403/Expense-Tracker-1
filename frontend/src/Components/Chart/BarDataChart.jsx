import { BarChart, Card } from "@tremor/react";
import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { chartDate, dateFormat } from "../../utils/dateFormat";

const chartdata = [
  {
    date: "Jan 22",
    Income: 2890,
    Expense: 2338,
  },
  {
    date: "Feb 22",
    Income: 2756,
    Expense: 2103,
  },
  {
    date: "Mar 22",
    Income: 3322,
    Expense: 2194,
  },
  {
    date: "Apr 22",
    Income: 3470,
    Expense: 2108,
  },
  {
    date: "May 22",
    Income: 3475,
    Expense: 1812,
  },
  {
    date: "Jun 22",
    Income: 3129,
    Expense: 1726,
  },
  {
    date: "Jul 22",
    Income: 3490,
    Expense: 1982,
  },
  {
    date: "Aug 22",
    Income: 2903,
    Expense: 2012,
  },
  {
    date: "Sep 22",
    Income: 2643,
    Expense: 2342,
  },
  {
    date: "Oct 22",
    Income: 2837,
    Expense: 2473,
  },
  {
    date: "Nov 22",
    Income: 2954,
    Expense: 3848,
  },
  {
    date: "Dec 22",
    Income: 3239,
    Expense: 3736,
  },
  {
    date: "Jan 23",
    Income: 3239,
    Expense: 3736,
  },
  {
    date: "Feb 23",
    Income: 3239,
    Expense: 3736,
  },
  {
    date: "Mar 23",
    Income: 3239,
    Expense: 3736,
  },
  {
    date: "Apr 23",
    Income: 3239,
    Expense: 3736,
  },
];

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const BarDataChart = () => {
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
  // Combine incomes and expenses into a single array
  const combinedData = [...incomes, ...expenses];

  // Create a mapping of dates to their corresponding income and expense amounts
  const dateMap = {};
  combinedData.forEach((item) => {
    const key = chartDate(item.date); // Assuming chartDate formats the date correctly
    if (!dateMap[key]) {
      dateMap[key] = { date: key, Income: 0, Expense: 0 };
    }
    if (item.type === "income") {
      dateMap[key].Income += item.amount;
    } else if (item.type === "expense") {
      dateMap[key].Expense += item.amount;
    }
  });

  // Convert the date map object to an array of objects
  let finalData = Object.values(dateMap);

  // Sort the final data array based on the month and year of the date
  finalData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <Card>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Overview (USD)
      </h3>
      <BarChart
        data={finalData}
        index="date"
        yAxisWidth={65}
        categories={["Income", "Expense"]}
        colors={["green", "red"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};

export default BarDataChart;
