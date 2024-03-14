import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

describe("Header Page Test Cases", () => {
  it("Should render Restaurant Card Component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
  });
});
