// app.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import BlogPage from './pages/BlogPage'; 
import ShopPage from './pages/ShopPage'; 
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>

      <div>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


