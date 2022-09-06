import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Third Party Imports

// Pages
import HomePage from './pages/HomePage/HomePage';
import MattressesPage from './pages/MattressesPage/MattressesPage';

import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/mattresses" element={<MattressesPage />} />

          <Route path="*" element={<ErrorPage />} />
          {/* Homepage (Default Route stays at bottom) */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
