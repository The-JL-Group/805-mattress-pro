import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Third Party Imports

// Pages
import HomePage from './pages/HomePage/HomePage';
import MattressesPage from './pages/MattressesPage/MattressesPage';
import MeetStevePage from './pages/MeetStevePage/MeetStevePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className='app'>

        <Routes>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>

        <Routes>
          <Route path="/meet-steve" element={<MeetStevePage/>}></Route>
        </Routes>

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
