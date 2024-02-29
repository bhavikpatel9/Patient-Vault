// DoctorDashboard.js

import React, { useState } from 'react';
import './DoctorDashboard.css'; // Import your CSS file for styling
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DoctorDashboard = () => {
  // Sample data (replace with dynamic data later)
  const patients = []; // Array of patient objects
  const [date, setDate] = useState(new Date());

  const appointments = []; // Array of appointment objects

  const handleDateChange = newDate => {
    setDate(newDate);
    // Fetch appointments for the selected date from backend
  };

  return (
    <div className="doctor-dashboard grid-container">

        <section className='side-nav-bar box'>
            <img className="logo" src="logo.png" alt="error"/>
            <ul>
                <li><a className='nav-link active' aria-current="page" href="#">Home</a></li>
                <li><a className='nav-link' href="#">Scheduled Visits</a></li>
            </ul>
        </section>

        {/* <section className='greet box right'>
             <p>Good Morning,</p>
             <h1>Dr. Zeus Walter</h1>
             <p className='p-color'>You are having a busy day today, have a good day today!</p>
        </section> */}

        <section className='History box right'>
        <h2>Patient List</h2>
        {/* Render patient list */}
        <ul>
          {patients.map(patient => (
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul>
        </section>


      <section className="today-session box right">
      <div className='today-session-div'>
        <p>Today's</p>
        <p>Sessions</p>
      </div>
      <div className='today-session-counter-online'>
        <p>12</p>
        <p>Online Session</p>
      </div>
      <div className='today-session-counter-offline'>
        <p>8</p>
        <p>Advanced Office</p>
        <p>Appointments</p>
      </div>
        
      </section>

      <section className="appointment-schedule box right">
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>
        <div className="vl"></div>
        {/* Render appointment schedule */}
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>{appointment.date}</li>
          ))}
        </ul>
      </section>

      <section className='messages box right'>

      </section>

      {/* Add more sections/components as needed */}
    </div>
  );
};

export default DoctorDashboard;
