import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>My Flower Hub</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;