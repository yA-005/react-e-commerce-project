

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Total: ${total.toFixed(2)}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/checkout">
          <button style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;