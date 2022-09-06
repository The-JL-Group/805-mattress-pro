import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Third Party Imports

// Pages
import HomePage from './pages/HomePage/HomePage';
import MattressesPage from './pages/MattressesPage/MattressesPage';
import MeetStevePage from './pages/MeetStevePage/MeetStevePage';
import ContactPage from './pages/ContactPage/ContactPage';

import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/contact" element={<ContactPage/>}></Route>
       


          <Route path="/meet-steve" element={<MeetStevePage/>}></Route>
       

     
          <Route path="/mattresses" element={<MattressesPage/>}></Route>
        

          <Route path="*" element={<ErrorPage />} />
          
          {/* Homepage (Default Route stays at bottom) */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
