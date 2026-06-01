

function ProductItem({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "auto" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;