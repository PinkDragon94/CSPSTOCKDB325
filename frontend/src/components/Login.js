import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Hook for routing

  // Handle user login
  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login successful');
      history.push('/'); // Redirect to homepage after login
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  // Handle user sign-up
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign-up successful');
      history.push('/'); // Redirect after sign-up
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Google login successful');
      history.push('/'); // Redirect after login
    } catch (error) {
      alert('Error during Google login: ' + error.message);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('User logged out');
      history.push('/login'); // Redirect after logout
    } catch (error) {
      alert('Error during logout: ' + error.message);
    }
  };

  // Check authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is logged in:', user);
        history.push('/'); // Redirect if already logged in
      } else {
        console.log('No user is logged in');
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [history]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleGoogleLogin}>Login with Google</button> {/* Google Login button */}
      <Link to="/signup">Don't have an account? Sign Up</Link>
      <button onClick={handleLogout}>Log Out</button> {/* Logout button */}
    </div>
  );
};

export default Login;

