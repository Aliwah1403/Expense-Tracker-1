import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { GlobalProvider } from "./context/globalContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./auth/sign-in/SignIn.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Transactions from "./Components/Transactions/Transactions.jsx";
import Incomes from "./Components/Incomes/Incomes.jsx";
import Expenses from "./Components/Expenses/Expenses.jsx";
import SignUp from "./auth/sign-up/SignUp.jsx";
import { Analytics } from "@vercel/analytics/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/incomes",
        element: <Incomes />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <GlobalProvider>
        <Analytics />
        <RouterProvider router={router} />
      </GlobalProvider>
    </ClerkProvider>
  </React.StrictMode>
);
