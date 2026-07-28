import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <header className="navbar">
<div className="logo">
    MY<span>SHOE</span>
</div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/Tshirt">Tshirt</Link></li>
          <li><Link to="/collections">Customer Service</Link></li>
           <li>
  <Link to="/cart">🛒 Cart</Link>
  </li>
  <li>
  <Link to="/profile">Profile</Link>
</li>

        </ul>
      </nav>

      <div className="right-side">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Shoes..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

    </header>
  );
};

export default Navbar;