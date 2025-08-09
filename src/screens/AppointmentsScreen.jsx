import React, { useState } from 'react';
import { Clock, Calendar, User, MapPin, Phone } from 'lucide-react';

export default function AppointmentsScreen() {
  const [appointments] = useState([
    {
      id: '1',
      date: '2025-01-20',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      specialty: 'General Medicine',
      location: 'Room 101',
      status: 'confirmed'
    },
    {
      id: '2',
      date: '2025-01-25',
      time: '2:30 PM',
      doctor: 'Dr. Johnson',
      specialty: 'Cardiology',
      location: 'Room 205',
      status: 'pending'
    },
    {
      id: '3',
      date: '2025-02-01',
      time: '11:00 AM',
      doctor: 'Dr. Williams',
      specialty: 'Dermatology',
      location: 'Room 150',
      status: 'confirmed'
    }
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'status-confirmed';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="screen">
      <h1 className="screen-title">
        <Clock className="title-icon" />
        Upcoming Appointments
      </h1>
      
      {appointments.length === 0 ? (
        <div className="empty-state">
          <Calendar className="empty-icon" />
          <p>No appointments scheduled</p>
        </div>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <div className="appointment-date">
                  <Calendar className="date-icon" />
                  <div>
                    <div className="date-primary">{formatDate(appointment.date)}</div>
                    <div className="date-secondary">{appointment.time}</div>
                  </div>
                </div>
                <span className={`appointment-status ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </div>
              
              <div className="appointment-details">
                <div className="detail-item">
                  <User className="detail-icon" />
                  <div>
                    <div className="detail-primary">{appointment.doctor}</div>
                    <div className="detail-secondary">{appointment.specialty}</div>
                  </div>
                </div>
                
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <div className="detail-primary">{appointment.location}</div>
                </div>
              </div>
              
              <div className="appointment-actions">
                <button className="action-btn secondary">Reschedule</button>
                <button className="action-btn primary">
                  <Phone className="btn-icon" />
                  Call Office
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}