import React from 'react';
import { Link } from 'react-router-dom';
// import StockTicker from '../components/StockTicker';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/dashboard" className="btn">Dashboard</Link></li>
          <li><Link to="/login" className="btn">Log In</Link></li>
          <li><Link to="/signup" className="btn">Sign Up</Link></li>
        </ul>
      </nav>
      {/* <StockTicker /> */}
      <div>
                <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;

