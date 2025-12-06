import { it, describe, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails.jsx";
import { BookProvider } from "../../context/BookContext.jsx";

describe("test book details component", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // dati finti
  });
  it("render books details after fetch", async () => {
    // test con quello che dovrebbe tornare
    const mockBooks = [
      {
        title: "stiletto",
        price: "12",
        category: "ciccio",
        img: "test.jpg",
      },
    ];
    //assegnamo una funzione fasulla, che fa una promise
    global.fetch = vi.fn(
      () => Promise.resolve({ ok: true, json: async () => mockBooks }) //ritorna oggetto con true e il json
    );

    render(
      <BookProvider>
        <MemoryRouter initialEntries={["/BookDetails/2"]}>
          {" "}
          {/* simula la rotta*/}
          <Routes>
            <Route path="/BookDetails/:asin" element={<BookDetails />} />
          </Routes>
        </MemoryRouter>
      </BookProvider>
    );
    await waitFor(() => {
      {
        /* simula l'attesa dei dati*/
      }
      const img = screen.getByAltText("stiletto");
      const title = screen.getByText("stiletto");
      const price = screen.getByText("12€");
      const category = screen.getByText("ciccio");
      expect(img).toHaveAttribute("src", "test.jpg");
      expect(title).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(category).toBeInTheDocument();
    });
  });
});

//const title = await screen.findByText("stiletto"); altro metodo che aspetta il caricamento dell'oggetto
// puoi dare ad un qualcosa un data-test-id a cui puoi dare un nome da utilizzare per i test
