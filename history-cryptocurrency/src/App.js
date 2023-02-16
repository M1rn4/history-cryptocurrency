import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeList from './Components/HomeList';
import Details from './Components/Details';
import Header from './Components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomeList />} />
      <Route path="/details/:id/" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
