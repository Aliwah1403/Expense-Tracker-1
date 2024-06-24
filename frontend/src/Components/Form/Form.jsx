import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { DatePicker, Select, SelectItem, Button } from "@tremor/react";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
// import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

const Form = () => {
  const { addIncome, getIncome, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: null,
    category: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    // Check if 'e' is an event or a direct value
    const value = e && e.target ? e.target.value : e;
    setInputState({ ...inputState, [name]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addIncome(inputState);
      await getIncome();
      setInputState({
        title: "",
        amount: "",
        date: null,
        category: "",
        description: "",
      });
    } catch (error) {
      alert("An error occurred", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Salary Amount"}
          onChange={handleInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          className="mx-auto max-w-sm"
          maxDate={new Date()}
          // value={date}
          onValueChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="selects input-control">
        <Select
          placeholder="Select Category"
          enableClear="true"
          value={category}
          onValueChange={handleInput("category")}
        >
          <SelectItem value="salary">Salary</SelectItem>
          <SelectItem value="freelancing">Freelancing</SelectItem>
          <SelectItem value="investments">Investments</SelectItem>
          <SelectItem value="stocks">Stocks</SelectItem>
          <SelectItem value="bitcoin">Bitcoin</SelectItem>
          <SelectItem value="bank">Bank Transfer</SelectItem>
          <SelectItem value="youtube">Youtube</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </Select>
      </div>

      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>

      <Button variant="primary" loading={loading} loadingText="Processing...">
        Add Income
      </Button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
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
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: var(--shadow-style);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default Form;
