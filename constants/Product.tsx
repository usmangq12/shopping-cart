import { ImageSourcePropType } from "react-native";
export type Product = {
  id: number;
  title: string;
  description: string;
  shopname: string;
  img: ImageSourcePropType;
  price: string;
  reviews: number;
  backgroundColor: string;
  wishList:boolean
};

export const Products: Product[] = [
  {
    id: 1,
    title: "HP Laptop",
    img: require("@/assets/images/hpLaptop.jpg"),
    description:
      "The HP Laptop offers powerful performance in a sleek design. Featuring the latest Intel i7 processor, 16GB of RAM, and a 512GB SSD, this laptop ensures smooth multitasking and fast load times. The 15.6-inch Full HD display delivers vibrant visuals, while the lightweight build makes it perfect for on-the-go use. Ideal for both work and entertainment, the HP Laptop is a versatile choice.",
    reviews: 4.5,
    shopname: "TechZone",
    price: "$999",
    backgroundColor: "tomato",
    wishList:false
  },
  {
    id: 2,
    title: "Lenovo Laptop",
    img: require("@/assets/images/lenovoLaptop.jpg"),
    description:
      "The Lenovo Laptop combines durability with high performance. Equipped with an AMD Ryzen 7 processor, 8GB of RAM, and a 256GB SSD, it provides reliable speed and efficiency. The 14-inch touchscreen display enhances productivity, and the robust build quality ensures longevity. Perfect for students and professionals alike, this laptop is designed to handle everyday tasks with ease.",
    reviews: 4,
    shopname: "GadgetWorld",
    price: "$899",
    backgroundColor: "thistle",
    wishList:false
  },
  {
    id: 3,
    title: "Dell Laptop",
    img: require("@/assets/images/dellLaptop.jpg"),
    description:
      "The Dell Laptop delivers exceptional reliability and productivity. With a powerful Intel i5 processor, 16GB of RAM, and a 1TB HDD, it is designed for heavy workloads and demanding applications. The 15.6-inch anti-glare display provides comfortable viewing, and the backlit keyboard allows for easy typing in low-light conditions. Ideal for business and professional use, the Dell Laptop ensures you stay productive.",
    reviews: 4.7,
    shopname: "DigitalDreams",
    price: "$1099",
    backgroundColor: "skyblue",
    wishList:false
  },
  {
    id: 4,
    title: "Asus Laptop",
    img: require("@/assets/images/asusLaptop.jpg"),
    description:
      "The Asus Laptop offers cutting-edge technology for gaming and work. Powered by an Intel i9 processor, 32GB of RAM, and a 1TB SSD, it provides top-tier performance for the most demanding tasks. The 17.3-inch 4K display delivers stunning visuals, and the NVIDIA RTX 3080 graphics card ensures smooth and immersive gaming experiences. Perfect for gamers and creative professionals, the Asus Laptop is a powerhouse.",
    reviews: 4.9,
    shopname: "GameTech",
    price: "$1299",
    backgroundColor: "skyblue",
    wishList:false
  },
  {
    id: 5,
    title: "Acer Laptop",
    img: require("@/assets/images/acerLaptop.jpg"),
    description:
      "The Acer Laptop provides affordability without compromising performance. Featuring an Intel i3 processor, 4GB of RAM, and a 128GB SSD, it is suitable for everyday tasks such as web browsing, document editing, and media playback. The 15.6-inch HD display offers clear visuals, and the compact design makes it easy to carry. Ideal for budget-conscious users, the Acer Laptop is a great entry-level option.",
    reviews: 4.3,
    shopname: "BudgetTech",
    price: "$799",
    backgroundColor: "teal",
    wishList:false
  },
];
