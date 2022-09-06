import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Third Party Imports

// Pages
import HomePage from './pages/HomePage/HomePage';
import MattressesPage from './pages/MattressesPage/MattressesPage';

function App() {
  return (
    <Router>
      <div className='app'>

        <Routes>
          <Route path="/mattresses" element={<MattressesPage/>}></Route>
        </Routes>

        {/* Homepage (Default Route stays at bottom) */}
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
