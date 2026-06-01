

import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1>ShoppyGlobe</h1>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}

export default Header;