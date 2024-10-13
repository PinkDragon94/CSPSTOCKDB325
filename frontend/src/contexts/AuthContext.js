// src/contexts/AuthContext.js

import React, { useContext, useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebase'; // Firebase setup required
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignUp = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    login,
    googleSignUp,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
