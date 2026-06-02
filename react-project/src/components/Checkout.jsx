

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2>Checkout</h2>
      <div style={{ marginBottom: "1rem" }}>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.title} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <form id="checkout-form">
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Full Name:</label><br />
          <input type="text" name="name" required style={{ width: "100%", padding: "0.3rem" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Address:</label><br />
          <textarea name="address" required style={{ width: "100%", padding: "0.3rem" }} />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Email:</label><br />
          <input type="email" name="email" required style={{ width: "100%", padding: "0.3rem" }} />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;