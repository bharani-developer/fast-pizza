# 🍕 Fast Pizza App

<div align="center">
  <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza1.png" alt="Pizza Home" width="200"/>
  <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza2.png" alt="Pizza Menu" width="200"/>
  <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza3.png" alt="Pizza Add" width="200"/>

</div>
<div align="center">
 <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza45.png" alt="Pizza Cart" width="200"/>
  <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza5.png" alt="Pizza Order" width="200"/>
  <img src="https://github.com/bharani-developer/fast-pizza/blob/main/public/pizza6.png" alt="Pizza Status" width="200"/>
</div>

Pizza Menu React App! This project demonstrates a basic implementation of a dynamic pizza menu using React. Users can browse through various pizza options, view details, and customize their selections.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start the Development Server](#start-the-development-server)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Development Tools](#development-tools)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

This project is a simple, user-friendly pizza menu built with React. It allows users to:

- Browse a list of pizzas
- View detailed information about each pizza
- Add pizzas to a cart
- Customize their order

The project aims to demonstrate key React concepts such as component-based architecture, state management, and props.

## Features

- **Responsive Design**: Works seamlessly on all devices
- **Dynamic Content**: Renders pizza options from a data file
- **Interactive UI**: Users can add pizzas to their cart and customize their orders

## Demo

Check out the live demo [here](https://bharani-developer.github.io/fast-pizza/).

## Install Dependencies

Install dependencies using npm:

npm install
npm start

## Usage

Once the development server is running, you can interact with the pizza menu app in your browser. Browse through the pizza options, view details, add pizzas to your cart, and customize your order as needed.

# Technologies Used

## Frontend

React
React Router Dom
Redux Toolkit
React Redux

## Development Tools

Vite.js (for fast development and building)
Tailwind CSS (for styling)
ESLint (for linting)
Prettier (for code formatting)

## Project Structure

fast-pizza/
│
├── public/
│ ├── vite.svg
│ └── index.html
│
├── src/
│ ├── features/
│ │ ├── cart/
│ │ │ ├── Cart.jsx
│ │ │ ├── CartItem.jsx
│ │ │ ├── CartOverview.jsx
│ │ │ ├── cartSlice.js
│ │ │ ├── DeleteItem.jsx
│ │ │ ├── EmptyCart.jsx
│ │ │ └── UpdateItemQuantity.jsx
│ │ ├── menu/
│ │ │ ├── Menu.jsx
│ │ │ └── MenuItem.jsx
│ │ ├── order/
│ │ │ ├── CreateOrder.jsx
│ │ │ ├── Order.jsx
│ │ │ ├── OrderItem.jsx
│ │ │ ├── SearchOrder.jsx
│ │ │ └── UpdateOrder.jsx
│ │ └── user/
│ │ ├── CreateUser.jsx
│ │ ├── UserName.jsx
│ │ └── userSlice.js
│ ├── services/
│ │ ├── apiGeocoding.js
│ │ └── apiRestaurant.js
│ ├── ui/
│ │ ├── AppLayout.jsx
│ │ ├── Button.jsx
│ │ ├── Error.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── LinkButton.jsx
│ │ └── Loader.jsx
│ ├── utils/
│ │ └── helpers.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── store.js
│
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── directory_tree.txt
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Clone the Repository

Clone the repository to your local machine using:

```sh
git clone https://github.com/bharani-developer/fast-pizza.git
cd fast-pizza
```
