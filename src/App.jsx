// src/App.js
import React, { lazy, useEffect } from "react";
import { ConfigProvider } from "antd";
import { useTheme } from "@/Context/ThemeContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import routes from "@/Utils/routes";
import themeOptions from "@/Utils/theme";
import axios from "axios";
import APIS from "./Config/apiConfig";
import PrivateRoutes from "./Layouts/Private";
import PublicRoutes from "./Layouts/Public";
const Login = lazy(() => import("@/Screens/Login"));

//SETTING UP AXIOS
axios.defaults.baseURL = APIS.BASE_URL;
const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
  "$1"
); //GETTING TOKEN FROM COOKIE
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : ""; //SETTING TOKEN TO AUTHORIZATION HEADER

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ConfigProvider
      theme={{
        ...themeOptions[theme],
      }}
    >
      <Routes>
        {/* PUBLIC ROUTES FOR AUTH PAGES */}
        <Route element={<PublicRoutes />}>
          <Route path="/auth/login" element={<Login />} key={"/auth/login"} />
        </Route>
        {/* PRIVATE ROUTES FOR DASHBOARD PAGES */}
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            {routes.map(({ path, Component }) => (
              <Route
                path={path}
                element={<Component />}
                key={path}
                errorElement={<>Error</>}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
