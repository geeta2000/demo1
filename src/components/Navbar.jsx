import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/Contact">
          <li>Content</li>
        </Link>

        <Link to="/page">
          <li>Page</li>
        </Link>

        <Link to="/remote">
          <li>Remote</li>
        </Link>

        <Link to="/remote">
          <li>New</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
