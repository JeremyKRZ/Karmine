import './App.scss';
import React from 'react';
import HomeView from './views/Home';
import TeamsView from './views/Teams';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<HomeView />} />
        <Route path="/teams" element={<TeamsView />} />
      </Routes>
    </div>
  );
}

export default App;
