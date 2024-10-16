// src/pages/LoginPage.js

import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Ensure this context handles Google login
import { useNavigate, Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the import based on your firebase setup

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to log in', error);
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error('Error during Google login:', error);
      setError('Failed to log in with Google. Please try again.');
    }
  };

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

      <div>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input type="password" ref={passwordRef} placeholder="Password" required />
          <button type="submit" className="btn">Log In</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn">Log In with Google</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
