import './App.scss';
import React from 'react';
import HomeView from './views/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
