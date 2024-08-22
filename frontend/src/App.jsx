import React, { useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import bg from "./images/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import { useGlobalContext } from "./context/globalContext";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";

import Navigation from "./Components/Navigation/Navigation";
import Expenses from "./Components/Expenses/Expenses";
import Transactions from "./Components/Transactions/Transactions";
import { Button } from "@tremor/react";
import {
  useUser,
  useOrganization,
  OrganizationSwitcher,
} from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const global = useGlobalContext();

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const { user, isLoaded, isSignedIn } = useUser();
  const { organization } = useOrganization();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  if (!organization && isLoaded) {
    return <Navigate to={"/select-organization"} />;
  }

  return (
    <AppStyled bg={bg} className="App">
      <Analytics />
      {orbMemo}
      <MainLayout>
        <Navigation />
        <main>
          <OrganizationSwitcher />
          <Outlet />
        </main>
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
    ${"" /* border-radius: 32px; */}
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
