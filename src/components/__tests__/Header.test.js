import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Page Test Cases", () => {
  it("Should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button"); //First Way

    //const loginButton = screen.getByText("Login"); // Second Way

    const loginButton = screen.getByRole("button", { name: "Login" }); //Third Way //Recommended

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header Component with Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart (0 items)");

    expect(cartItem).toBeInTheDocument();
  });

  it("Should render Header Component with Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/); //Regex Expression

    expect(cartItem).toBeInTheDocument();
  });

  it("Should change Login Button to Logout on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
