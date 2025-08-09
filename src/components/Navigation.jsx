import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Calendar, Clock } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/schedule', icon: Calendar, label: 'Schedule' },
    { path: '/appointments', icon: Clock, label: 'Appointments' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon: Icon, label }) => (
        <button
          key={path}
          className={`nav-item ${location.pathname === path ? 'active' : ''}`}
          onClick={() => navigate(path)}
        >
          <Icon className="nav-icon" />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}