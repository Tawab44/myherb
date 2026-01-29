import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/hlogo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Herb AI Logo" className="logo-img" />
      </Link>


      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {token ? (
          <>
            <li>
  <Link to="/Vgarden" className="nav-btn vgarden-btn">
    VGarden
  </Link>
          </li>
            <li>
              <button
  onClick={handleLogout}
  className="nav-btn logout-btn"
         >
            Logout
             </button>

            </li>
          </>
        ) : (
          <>
            <li>
  <Link to="/login" className="nav-btn login-btn">Login</Link>
</li>
<li>
  <Link to="/signup" className="nav-btn signup-btn">Signup</Link>
</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
