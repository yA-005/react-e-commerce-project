

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

// Dummy products (same as before)
const allProducts = [
  { id: 1, title: "Product One", price: 29.99, thumbnail: "<https://via.placeholder.com/150>" },
  { id: 2, title: "Product Two", price: 49.99, thumbnail: "<https://via.placeholder.com/150>" },
  { id: 3, title: "Product Three", price: 19.99, thumbnail: "<https://via.placeholder.com/150>" },
];

function ProductList() {
  const searchTerm = useSelector(state => state.search.searchTerm);

  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "1rem" }}>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      {filteredProducts.length === 0 && <p>No products match your search.</p>}
    </div>
  );
}

export default ProductList;