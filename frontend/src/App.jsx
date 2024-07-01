import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import bg from "./images/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import { useGlobalContext } from "./context/globalContext";
import LoginPage from "./Components/Signup/LoginPage";
import Homepage from "./Homepage/Homepage";
// import { selectUsers } from "./store/usersSlice";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";

import Navigation from "./Components/Navigation/Navigation";
import Expenses from "./Components/Expenses/Expenses";
import Transactions from "./Components/Transactions/Transactions";

function App() {
  const global = useGlobalContext();

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  // const user = useSelector(selectUsers);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <BrowserRouter>
          <Navigation />
          <main>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </BrowserRouter>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
