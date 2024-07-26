import { useAuth } from "@clerk/clerk-react";
import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const createAuthenticatedAxios = (getToken) => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(async (config) => {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  return instance;
};

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const { getToken } = useAuth();
  const authenticatedAxios = React.useMemo(
    () => createAuthenticatedAxios(getToken),
    [getToken]
  );

  // adding incomes to db
  const addIncome = async (income) => {
    try {
      await authenticatedAxios.post("add-income", income);
      getIncome();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // retrieving incomes from the db
  const getIncome = async () => {
    try {
      const response = await authenticatedAxios.get("get-incomes");
      setIncomes(response.data);
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // deleting incomes from db
  const deleteIncome = async (id) => {
    try {
      await authenticatedAxios.delete(`delete-income/${id}`);
      getIncome();
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // getting total of all incomes added
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  // adding expenses to db
  const addExpense = async (expense) => {
    try {
      await authenticatedAxios.post("add-expense", expense);
      getExpense();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // retrieving expenses from the db
  const getExpense = async () => {
    try {
      const response = await authenticatedAxios.get("get-expenses");
      setExpenses(response.data);
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // deleting expenses from db
  const deleteExpense = async (id) => {
    try {
      await authenticatedAxios.delete(`delete-expense/${id}`);
      getExpense();
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // getting total of all expenses added
  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += expense.amount;
    });

    return totalExpense;
  };

  // Getting balance after all incomes and expenses are calculated
  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  // Getting recent transaction history
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 4);
  };

  // Getting total transaction history
  const totalTransactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        expenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        totalTransactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
