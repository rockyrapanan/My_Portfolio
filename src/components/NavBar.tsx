import { Link } from "react-router-dom";
import '../CSS/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
