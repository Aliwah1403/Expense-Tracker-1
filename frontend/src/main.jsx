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

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      {/* <App /> */}
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </GlobalProvider>
  </React.StrictMode>
);
