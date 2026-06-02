

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    }));
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} loading="lazy" style={{ width: "100%", height: "auto" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;