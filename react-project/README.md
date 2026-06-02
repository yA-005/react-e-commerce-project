

# 🛍️ ShoppyGlobe – E‑commerce App

A modern React e‑commerce application built with Vite, React Router, Redux Toolkit, and responsive CSS.
Features include product listing, search, shopping cart with quantity controls, checkout flow, and lazy loading for performance.

**GitHub Repository:** [https://github.com/yA-005/react-e-commerce-project](https://github.com/yA-005/react-e-commerce-project)

## ✨ Features

- Browse products (fetched from DummyJSON API)
- Search products by title (Redux‑based)
- Add/remove products to cart
- Adjust item quantities (minimum 1)
- View cart summary and total
- Checkout with dummy form and order placement
- 404 page for unknown routes
- Fully responsive design (mobile, tablet, desktop)
- Code splitting & lazy loading for all page components
- Lazy loading of product images

## 🛠️ Tech Stack

- **React 18** (functional components, hooks)
- **Vite** – fast build tool
- **React Router** – client‑side routing
- **Redux Toolkit** – state management (cart, search)
- **CSS** – custom styling with flex/grid & media queries

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/yA-005/react-e-commerce-project.git>
   cd react-e-commerce-project

   📁 Project Structure

   src/
├── components/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   ├── Header.jsx
│   ├── NotFound.jsx
│   ├── ProductDetail.jsx
│   ├── ProductItem.jsx
│   └── ProductList.jsx
├── redux/
│   ├── cartSlice.js
│   ├── searchSlice.js
│   └── store.js
├── hooks/
│   └── useFetchProducts.js (optional)
├── App.jsx
├── main.jsx
└── index.css