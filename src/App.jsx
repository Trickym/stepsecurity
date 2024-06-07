// src/App.js
import React, { lazy, useEffect } from "react";
import { ConfigProvider } from "antd";
import { useTheme } from "@/Context/ThemeContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import routes from "@/Utils/routes";
import themeOptions from "@/Utils/theme";

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
        {/* PRIVATE ROUTES FOR DASHBOARD PAGES */}
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
      </Routes>
    </ConfigProvider>
  );
};

export default App;
