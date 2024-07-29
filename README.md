## Shopping Cart

Shopping Cart is an app where users can authenticate, search for products, add products to their cart, and purchase them. Sellers can manage their products through a dedicated dashboard.

## Features

Authentication: Both buyers and sellers can sign up and log in using email and password.
Seller Dashboard: Sellers can add new products, view their product list, and search through their products.
Product Search: Buyers can search for products.
Add to Cart: Buyers can add products to their cart.
Purchase Products: Buyers can purchase products by providing their address, email, and phone number.

## Getting Started

## Prerequisites

Node.js installed
Supabase integration for authentication

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/usmangq12/shopping-cart.git
cd shopping_cart
Install dependencies:

bash
Copy code
yarn install
yarn run start
In the output, you'll find options to open the app in a:

## development build
Android emulator
iOS simulator
Expo Go, a limited sandbox for trying out app development with Expo
You can start developing by editing the files inside the app directory. This project uses file-based routing.

## Set Environment Variables

Create a .env file in the root directory of your project and add your Supabase credentials:

plaintext
Copy code
EXPO_PUBLIC_SUPABASE_URL=Your_Supabase_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=Your_Supabase_Anon_Key
Reset Project

If you need to start with a fresh project setup, run:

bash
Copy code

npm run reset-project
This command will move the starter code to the app-example directory and create a blank app directory where you can start developing.

