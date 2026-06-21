

```markdown
# 🛍️ ShoppyGlobe – Full‑Stack E‑commerce Application

A modern full‑stack e‑commerce application built with **React** (frontend) and **Node.js + Express + MongoDB** (backend).  
Features include product browsing, shopping cart with Redux, JWT authentication, and a RESTful API.

**GitHub Repository:** [https://github.com/yA-005/react-e-commerce-project](https://github.com/yA-005/react-e-commerce-project)

---

## ✨ Frontend Features

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

---

## ⚙️ Backend API Features

- User registration and login with JWT authentication
- Product management (GET all, GET by ID)
- Shopping cart operations (add, update, delete, view)
- Input validation and error handling
- Protected routes using JWT middleware
- MongoDB database integration with Mongoose ODM
- RESTful API structure

---

## 🛠️ Tech Stack

### Frontend
- **React 18** – functional components & hooks
- **Vite** – fast build tool
- **React Router** – client‑side routing
- **Redux Toolkit** – state management (cart, search)
- **CSS** – custom styling with flex/grid & media queries

### Backend
- **Node.js** – JavaScript runtime
- **Express** – web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – authentication
- **bcryptjs** – password hashing
- **dotenv** – environment variables
- **cors** – cross‑origin resource sharing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yA-005/react-e-commerce-project.git
   cd react-e-commerce-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/shoppyglobe
   JWT_SECRET=your_super_secret_key
   ```

4. Start MongoDB (if running locally):
   ```bash
   brew services start mongodb-community
   ```

5. Run the backend server:
   ```bash
   node backend/src/server.mjs
   ```
   The API will be available at `http://localhost:5001`.

6. Run the frontend (in a separate terminal):
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
react-project/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.mjs
│   │   ├── models/
│   │   │   ├── User.mjs
│   │   │   ├── Product.mjs
│   │   │   └── Cart.mjs
│   │   ├── routes/
│   │   │   ├── authRoutes.mjs
│   │   │   ├── productRoutes.mjs
│   │   │   └── cartRoutes.mjs
│   │   ├── middleware/
│   │   │   └── auth.mjs
│   │   └── server.mjs
│   ├── package.json
│   └── .env
├── frontend/ (or src/ if using Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
├── package.json
└── README.md
```

---

## 📌 API Endpoints

All endpoints are prefixed with `/api`. Protected routes require a valid JWT token in the `Authorization` header.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST   | `/auth/register` | Register a new user | ❌ |
| POST   | `/auth/login`    | Login and receive token | ❌ |
| GET    | `/profile`       | Get current user info | ✅ |
| GET    | `/products`      | List all products | ❌ |
| GET    | `/products/:id`  | Get a product by ID | ❌ |
| GET    | `/cart`          | View current user's cart | ✅ |
| POST   | `/cart`          | Add product to cart | ✅ |
| PUT    | `/cart/:productId` | Update product quantity in cart | ✅ |
| DELETE | `/cart/:productId` | Remove product from cart | ✅ |

---

## 🧪 Testing

Use **Thunder Client** (VS Code extension) or **Postman** to test the API endpoints.

- For protected routes, copy the token from the login response and set it in the `Authorization` header:
  ```
  Authorization: Bearer <your_token>
  ```

---

## 📦 Deployment

- **Backend:** Can be deployed on any Node.js hosting platform (e.g., Render, Heroku, AWS). Ensure environment variables are set.
- **Frontend:** Build with `npm run build` and deploy to Netlify, Vercel, or any static hosting service.

---

## 🤝 Contributing

This is a personal project for educational purposes. Fork and submit pull requests for improvements.

---

## 📄 License

MIT

---

## 🔗 Repository

[GitHub – yA-005/react-e-commerce-project](https://github.com/yA-005/react-e-commerce-project)
```