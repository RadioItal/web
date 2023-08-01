import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.js';

//require('dotenv').config();

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes and components for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(<App />);

export default App;