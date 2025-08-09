import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Stethoscope } from 'lucide-react';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="hero-section">
        <Stethoscope className="hero-icon" />
        <h1 className="hero-title">Doctor Appointment</h1>
        <p className="hero-subtitle">Manage your healthcare appointments with ease</p>
      </div>
      
      <div className="action-cards">
        <button 
          className="action-card primary"
          onClick={() => navigate('/schedule')}
        >
          <Calendar className="card-icon" />
          <span>Schedule Appointment</span>
        </button>
        
        <button 
          className="action-card secondary"
          onClick={() => navigate('/appointments')}
        >
          <Clock className="card-icon" />
          <span>View Appointments</span>
        </button>
      </div>
    </div>
  );
}