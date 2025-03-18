import React from "react";
import { createContext } from "react";

export const themecontext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const [AuthenticationForNav, setAuthentication] = React.useState(true);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  function handleChangeAuth(val) {
    setAuthentication(val);
  }
  return (
    <themecontext.Provider
      value={{ theme, handleTheme, AuthenticationForNav, handleChangeAuth }}
    >
      {children}
    </themecontext.Provider>
  );
};
