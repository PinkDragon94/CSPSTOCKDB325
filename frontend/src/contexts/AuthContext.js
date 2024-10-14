// src/contexts/AuthContext.js

import React, { useContext, useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebase'; // Firebase setup required
import { signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false after the user is checked
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error; // Propagate the error
    }
  };

  const googleSignUp = async () => {
    try {
      return await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Google sign-up failed:', error.message);
      throw error; // Propagate the error
    }
  };

  const logout = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error.message);
      throw error; // Propagate the error
    }
  };

  const value = {
    currentUser,
    login,
    googleSignUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when loading is false */}
    </AuthContext.Provider>
  );
}

