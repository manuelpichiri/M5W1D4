import { createContext, useState } from "react";

export const CommentContext = createContext();
export const CommentProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState("");
  const [commentsValue, setCommentsValue] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);

  return (
    <CommentContext.Provider
      value={{
        isSelected,
        setIsSelected,
        commentsValue,
        setCommentsValue,
        commentLoading,
        setCommentLoading,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
