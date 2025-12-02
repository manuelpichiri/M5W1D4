import { createContext, useState } from "react";

export const CommentContext = createContext();
export const CommentProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState("");

  return (
    <CommentContext.Provider value={{ isSelected, setIsSelected }}>
      {children}
    </CommentContext.Provider>
  );
};
