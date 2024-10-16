import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import DashboardPage from './pages/DashboardPage'; 
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Corrected the path for the home page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} /> {/* This line was corrected */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage /> {/* This is where my stock dashboard will be */}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

