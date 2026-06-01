

import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
      <img src={item.thumbnail} alt={item.title} width="60" />
      <div style={{ flex: 1 }}>
        <h4>{item.title}</h4>
        <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleRemove} style={{ marginLeft: "1rem", backgroundColor: "#ff4444", color: "white" }}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;