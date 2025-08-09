import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

export default function ScheduleScreen() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    doctor: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    if (formData.date && formData.time && formData.doctor) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ date: '', time: '', doctor: '', reason: '' });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="screen">
        <div className="success-message">
          <CheckCircle className="success-icon" />
          <h2>Appointment Scheduled!</h2>
          <p>Your appointment has been confirmed for {formData.date} at {formData.time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <h1 className="screen-title">
        <Calendar className="title-icon" />
        Schedule Appointment
      </h1>
      
      <form className="appointment-form" onSubmit={handleSchedule}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="doctor">Doctor</label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith - General Medicine</option>
            <option value="Dr. Johnson">Dr. Johnson - Cardiology</option>
            <option value="Dr. Williams">Dr. Williams - Dermatology</option>
            <option value="Dr. Brown">Dr. Brown - Pediatrics</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Visit (Optional)</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Brief description of your concern..."
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">
          <CheckCircle className="btn-icon" />
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}