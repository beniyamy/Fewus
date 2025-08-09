import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/schedule" element={<ScheduleScreen />} />
            <Route path="/appointments" element={<AppointmentsScreen />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;