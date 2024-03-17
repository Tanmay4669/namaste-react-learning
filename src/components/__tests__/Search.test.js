import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Search Test Cases", () => {
  it("Should render the Body Component and Search Res List for Burger text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    //Screen should load 1 card

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
  });

  it("Should filter Top Rated Restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const filterButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(filterButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(20);
  });
});
