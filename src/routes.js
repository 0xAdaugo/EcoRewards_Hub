import Home from "./components/pages/Home";
import GetStarted from "./components/common/GetStarted";
import Dashboard from "./components/pages/dashboard/Dashboard";

export const routes = [
  {
    key: "1",
    path: "/",
    name: Home,
  },
  {
    key: "2",
    path: "/get-started",
    name: GetStarted,
  },
  {
    key: "3",
    path: "/dashboard",
    name: Dashboard,
  },
];
