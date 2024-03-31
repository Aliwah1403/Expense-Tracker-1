import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TotalHistory = () => {
  const { totalTransactionHistory } = useGlobalContext();

  const [selectedOption, setSelectedOption] = useState("all");

  const [selectedDate, setSelectedDate] = useState(null);

  const [...history] = totalTransactionHistory();

  // dropdown menu to switch between all transactions and the date picker
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "all") {
      setSelectedDate(null);
    }
  };

  // using date-picker to filter out dates and only show transactions for selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredHistory = selectedDate
    ? history.filter((item) => {
        return dateFormat(item.date) === dateFormat(selectedDate);
      })
    : history;
  return (
    <>
      <div
        className="selects"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1rem",
          gap: "0 10px",
          color: "rgba(34,34,96,0.4)",
        }}
      >
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            outline: "none",
            border: "2px solid #fff",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            background: "transparent",
            resize: "none",
            boxShadow: "var(--shadow-style)",
            color: "rgba(34,34,96,0.9)",
          }}
        >
          <option value="all">All Transactions</option>
          <option value="date">Pick A Date</option>
        </select>

        {selectedOption === "date" && (
          <DatePicker
            placeholderText="Enter/Pick A Date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        )}
      </div>
      <HistoryStyled>
        {filteredHistory.length === 0 ? (
          <h1 className="noDataTitle">No data available</h1>
        ) : (
          filteredHistory.map((item) => {
            const { _id, title, amount, type, date } = item;
            return (
              <div key={_id} className="history-item">
                <p
                  style={{
                    color: type === "expense" ? "red" : "var(--color-green)",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: type === "expense" ? "red" : "var(--color-green)",
                  }}
                >
                  {type === "expense" ? `-${amount}` : `+${amount}`}
                </p>
                <p>{dateFormat(date)}</p>
              </div>
            );
          })
        )}
      </HistoryStyled>
    </>
  );
};

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  select {
    margin-bottom: 0.5rem;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: var(--shadow-style);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .noDataTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70vh;
    font-size: 60px;
    text-transform: uppercase;
    opacity: 0.3;
    letter-spacing: 0.3rem;
  }
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;
export default TotalHistory;
