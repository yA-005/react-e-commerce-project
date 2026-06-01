

import ProductItem from "./ProductItem";

const dummyProducts = [
  { id: 1, title: "Product One", price: 29.99, thumbnail: "<https://via.placeholder.com/150>" },
  { id: 2, title: "Product Two", price: 49.99, thumbnail: "<https://via.placeholder.com/150>" },
  { id: 3, title: "Product Three", price: 19.99, thumbnail: "<https://via.placeholder.com/150>" },
];

function ProductList() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "1rem" }}>
      {dummyProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;