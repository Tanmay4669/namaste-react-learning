import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Cart Updation", () => {
  it("Should load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    //20 from the restaurant menu and 1 that we clickd on Add button and got added into the Cart Page
    expect(screen.getAllByTestId("foodItems").length).toBe(21);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    //20 from the restaurant menu and 0 from Cart Page
    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(
      screen.getByText("Cart is Empty. Add items to the cart")
    ).toBeInTheDocument();
  });
});
