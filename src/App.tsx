import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
// components
import LoginView from './views/LoginView';
import SearchView from './views/SearchView';
import InformationView from './views/InformationView';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/information" element={<InformationView />} />
        <Route path="/c360" element={<InformationView defaultTab="c360" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
