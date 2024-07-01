import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from "@tremor/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";

const TotalHistory = () => {
  const { totalTransactionHistory } = useGlobalContext();
  const [...history] = totalTransactionHistory();

  // date range
  const today = new Date();
  const [dateRange, setDateRange] = useState({ from: today, to: today });


  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  //  bug needs to be fixed
 const filteredData = useMemo(() => {
   if (!dateRange.from || !dateRange.to) return history;

   const fromDate = moment(dateRange.from).startOf("day");
   const toDate = moment(dateRange.to).endOf("day");

   return history.filter((transaction) => {
     const transactionDate = moment(transaction.date);
     return transactionDate.isBetween(fromDate, toDate, null, "[]");
   });
 }, [history, dateRange]);
//  

  const tableData = filteredData.map((transaction) => ({
    type: transaction.type,
    title: transaction.title,
    category: transaction.category,
    amount: transaction.amount,
    date: dateFormat(transaction.date),
    description: transaction.description,
  }));

  return (
    <>
      <div
        className="selects"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
          gap: "0 10px",
          color: "rgba(34,34,96,0.4)",
        }}
      >
        <DateRangePicker
          maxDate={today}
          value={dateRange}
          onValueChange={handleDateRangeChange}
        />
      </div>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10"></div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Transaction Type
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Title
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Category
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Amount
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Date
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Description
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.type}>
              <TableCell
                className={`font-medium ${
                  item.type === "expense"
                    ? "text-red-500"
                    : "text-tremor-content-strong dark:text-dark-tremor-content-strong"
                }`}
              >
                {/* will make green for income type and red for expense type */}
                {item.type}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell className="text-right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TotalHistory;
