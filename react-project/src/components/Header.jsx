

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function Header() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1>ShoppyGlobe</h1>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
        style={{ padding: "0.3rem", width: "200px" }}
      />
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}

export default Header;