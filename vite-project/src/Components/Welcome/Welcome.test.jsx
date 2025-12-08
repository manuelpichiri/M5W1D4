import { it, describe, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";
import { CommentContext } from "../../context/CommentContext";

const renderWithProviders = ({
  isSelected = "",
  setIsSelected = vi.fn(),
  commentsValue = [],
  setCommentsValue = vi.fn(),
  commentLoading = false,
  setCommentLoading = vi.fn(),
  inputField = "",
  setInputField = vi.fn(),
  allBooks = [],
  setAllBooks = vi.fn(),
  loading = false,
  setLoading = vi.fn(),
  isDark = false,
  setIsDark = vi.fn(),
} = {}) => {
  return render(
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
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <BookContext.Provider
          value={{
            inputField,
            setInputField,
            allBooks,
            setAllBooks,
            loading,
            setLoading,
          }}
        >
          <Welcome />
        </BookContext.Provider>
      </ThemeContext.Provider>
    </CommentContext.Provider>
  );
};

describe("test welcome component", () => {
  it("render component", () => {
    renderWithProviders(); // serve per renderizza il componente
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
