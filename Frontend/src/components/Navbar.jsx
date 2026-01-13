import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            🌱 PlantID
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/identify" className="hover:text-green-200">Identify</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/login" className="hover:text-green-200">Login</Link>
            <Link
              to="/signup"
              className="bg-white text-green-700 px-4 py-1 rounded-lg hover:bg-green-100"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-green-200">Home</Link>
          <Link to="/identify" className="block hover:text-green-200">Identify</Link>
          <Link to="/about" className="block hover:text-green-200">About</Link>
          <Link to="/login" className="block hover:text-green-200">Login</Link>
          <Link
            to="/signup"
            className="block bg-white text-green-700 text-center py-1 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
