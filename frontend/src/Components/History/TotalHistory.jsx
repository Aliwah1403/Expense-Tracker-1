import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TotalHistory = () => {
  const { totalTransactionHistory } = useGlobalContext();

  const [selectedDate, setSelectedDate] = useState(null);

  const [...history] = totalTransactionHistory();

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
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <HistoryStyled>
        {filteredHistory.map((item) => {
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
        })}
      </HistoryStyled>
    </>
  );
};

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
