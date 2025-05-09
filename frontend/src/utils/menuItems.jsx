import { dashboard, expenses, settings, transactions, trend } from "../utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/transactions",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/incomes",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/expenses",
  },
   {
    id: 5,
    title: "Settings",
    icon: settings,
    link: "/settings",
  },
];
