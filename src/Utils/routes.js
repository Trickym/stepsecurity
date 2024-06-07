import { lazy } from "react";

export const routes = [
  {
    path: "/",
    exact: true,
    Component: lazy(() => import("@/Screens/Dashboard")),
    roles: [],
  },
];

export default routes;
