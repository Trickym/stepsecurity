import APIS from "@/Config/apiConfig";
import { message, notification } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localAuthToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const localUserData = JSON.parse(localStorage.getItem("user"));

  const [token, setToken] = useState(localAuthToken);
  const [userData, setUserData] = useState(localUserData);

  const [loginLoading, setLoginLoading] = useState(false);

  const loginHandler = async ({ username, password }) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    setLoginLoading(true);
    try {
      const loginResponse = await axios.post(APIS.LOGIN_API, formData);
      notification.success({
        message: "Successfully logged in!",
      });

      let token = loginResponse?.data?.personal_info?.token;
      let personal_info = loginResponse?.data?.personal_info;
      let academic_profile = loginResponse?.data?.academic_profile;
      delete personal_info?.token;

      //   SETTING TOKEN TO COOKIE
      setToken(token);
      document.cookie = `token=${token}; path=/`;

      //   SETTING USER DETAILS TO LOCAL STORAGE
      setUserData({ academic_profile, personal_info });
      if (personal_info && academic_profile) {
        localStorage.setItem(
          "user",
          JSON.stringify({ academic_profile, personal_info })
        );
      }
      window.location = "/";
    } catch (error) {
      console.log({ error });

      notification.error({
        message:
          error?.response?.data?.message ??
          error?.response?.data?.detail ??
          "Something went wrong!",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const logoutHandler = () => {
    setToken("");
    setUserData(null);
    localStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      logoutHandler();
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userData,
        loginHandler,
        logoutHandler,
        loginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
