import { render, screen, waitFor } from "@testing-library/react-native";
import { ProductDetailCard } from "../../ProductDetailCard";
import * as router from "expo-router";
import { Rating } from "react-native-ratings";

jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
  useRouter: () => ({
    navigate: jest.fn(),
    back: jest.fn(),
  }),
}));

describe("ProductDetailCard", () => {
  beforeAll(() => {
    router.useLocalSearchParams.mockReturnValue({ id: "1" });
  });

  it("Show Product Details", async () => {
    render(<ProductDetailCard />);

    expect(screen.getByText("TechZone")).toBeTruthy();
    expect(screen.getByText("HP Laptop")).toBeTruthy();
    expect(screen.getByText("$999")).toBeTruthy();
    expect(
      screen.getByText(
        "The HP Laptop offers powerful performance in a sleek design. Featuring the latest Intel i7 processor, 16GB of RAM, and a 512GB SSD, this laptop ensures smooth multitasking and fast load times. The 15.6-inch Full HD display delivers vibrant visuals, while the lightweight build makes it perfect for on-the-go use. Ideal for both work and entertainment, the HP Laptop is a versatile choice."
      )
    ).toBeTruthy();
    await waitFor(() => {
      const productImage = screen.getByTestId("product-image");
      expect(productImage.props.source).toEqual(
        require("@/assets/images/hpLaptop.jpg")
      );
    });
    const ratingComponent = screen.UNSAFE_getByType(Rating);
    expect(ratingComponent.props.ratingCount).toBe(5);
    expect(ratingComponent.props.startingValue).toBe(4.5);
  });
});
