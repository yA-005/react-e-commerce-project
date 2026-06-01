

import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;