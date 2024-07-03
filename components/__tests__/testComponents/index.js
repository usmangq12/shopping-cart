import HomeScreen from "../../../app/index"
import { render, screen, fireEvent, } from "@testing-library/react-native";

it("Show Text in Home Page", () => {
  render(<HomeScreen />);
  const text = screen.getByText("Popular Items");
  expect(text).toBeTruthy();
});
