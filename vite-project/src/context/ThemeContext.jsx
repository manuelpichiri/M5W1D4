import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider
      value={{
        isDark,
        setIsDark,
      }}
    ></ThemeProvider>
  );
};
