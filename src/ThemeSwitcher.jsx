// src/ThemeSwitcher.js
import React from "react";
import { Switch } from "antd";
import { useTheme } from "@/Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      size="large"
    />
  );
};

export default ThemeSwitcher;
