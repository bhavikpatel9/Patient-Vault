// DoctorDashboard.js

import React, { useState } from 'react';
import styles from './DoctorDashboard.module.css'; // Import your CSS file for styling
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
    <>
    <div className={`${styles.doctorDashboard} ${styles.gridContainer}`}>

        <section className={`${styles.sideNavBar} ${styles.box}`}>
            <img className={styles.logo} src="/Frame 1000002286.png" alt="error"/>
            <ul>
                <li><a className={`${styles.navLink} ${styles.active}`} aria-current="page" href="#">Home</a></li>
                <li><a className={styles.navLink} href="#">Scheduled Visits</a></li>
            </ul>
        </section>

        <section className={`${styles.greet} ${styles.box} ${styles.right}`}>
             <p>Good Morning,</p>
             <h1>Dr. Zeus Walter</h1>
             <p className={styles.pColor}>You are having a busy day today, have a good day today!</p>
        </section>

        <section className={`${styles.History} ${styles.box} ${styles.right}`}>
        {/* <h2>Patient List</h2> */}
        {/* Render patient list */}
        {/* <ul>
          {patients.map(patient => (
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul> */}
        <div className={styles.historyIconAndHeading}>
        <img src="/history.png" alt="" />
        <h4>History</h4>
        </div>
        <p>
              - - - - - - - - - - - - - - - - - - - -  Yesterday, 15th January 2024 - - - - - - - - - - - - - - - - - -
            </p>
            <div className={styles.historyMsg}>
              <img src="/Rectangle 10.png" alt="" />
              <div className={styles.Ethan}>
                <h4>Ethan</h4>
                <p>Hypertension, Type 2 Diabetes</p>
              </div>
              <div className={styles.time}>
                <p className={styles.timeP}>19:36</p>
                <p>Prescribed blood pressure monitoring and HbA1c test.</p>
                <p className={styles.timeN}>Next visit on 24th Feb 2024</p>
              </div>
            </div>
        <hr />
            <div className={styles.historyMsg}>
              <img src="/Rectangle 10 (1).png" alt="" />
              <div className={styles.Ethan}>
                <h4>Michael</h4>
                <p>Hypertension, Type 2 Diabetes</p>
              </div>
              <div className={styles.time}>
                <p className={styles.timeP}>19:36</p>
                <p>Prescribed blood pressure monitoring and HbA1c test.</p>
                <p className={styles.timeN}>Next visit on 24th Feb 2024</p>
              </div>
            </div>
        <hr />
            <div className={styles.historyMsg}>
              <img src="/Rectangle 10 (2).png" alt="" />
              <div className={styles.Ethan}>
                <h4>Emily</h4>
                <p>Hypertension, Type 2 Diabetes</p>
              </div>
              <div className={styles.time}>
                <p className={styles.timeP}>19:36</p>
                <p>Prescribed blood pressure monitoring and HbA1c test.</p>
                <p className={styles.timeN}>Next visit on 24th Feb 2024</p>
              </div>
            </div>
        <hr />
        </section>


      <section className={`${styles.todaySession} ${styles.box} ${styles.right}`}>
      <div className={styles.todaySessionDiv}>
        <p>Today's</p>
        <p>Sessions</p>
      </div>
      <div className={styles.todaySessionCounterOnline}>
        <p>12</p>
        <p>Online Session</p>
      </div>
      <div className={styles.todaySessionCounterOffline}>
        <p>8</p>
        <p>Advanced Office</p>
        <p>Appointments</p>
      </div>
        
      </section>

      <section className={`${styles.appointmentSchedule} ${styles.box} ${styles.right}`}>
        <div className={styles.calendarContainer}>
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>
        <div className={styles.vl}></div>
        <div id='msg'>
          <div>
            <pre>  ------------ Morning ------------</pre>
            <div className={styles.appo}>
              <pre>  Clinic Patient</pre>
              <p>9:00 - 11:00</p>
            </div>
          </div>
          <div>
            <pre>  ------------ Afternoon ----------</pre>
            <div className={styles.appo}>
              <pre>  Online Session</pre>
              <p>9:00 - 11:00</p>
            </div>
          </div>
          <div>
            <pre>  ------------ Evening ------------</pre>
            <div className={styles.appo}>
              <pre>  Clinic Patient</pre>
              <p>9:00 - 11:00</p>
            </div>
          </div>
        </div>
        {/* Render appointment schedule */}
        {/* <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>{appointment.date}</li>
          ))}
        </ul> */}
      </section>

      <section className={`${styles.messages} ${styles.box} ${styles.right}`}>
      <div className={styles.pateintMessage}>
            <p>Messages from Patients</p>
            <p>
              - - - - - - - - - - - - - Yesterday, 15th January 2024 - - - - - -
              - - - - - -
            </p>

            <div className={styles.msg}>

              <div className={styles.MsgLeft}>
                <img src="/patient-msg-img.png" alt="" />
              </div>

              <div className={styles.NameAndMsg}>
                <p>Jyoti Despandey - Heart Patient</p>
                <p>I am feeling good, today</p>
              </div>

              <div className={styles.msgRight}>
                <p>17:36</p>
                <p className={styles.one}>1</p>
              </div>
            </div>

            <div className={styles.msg}>

              <div className={styles.MsgLeft}>
                <img src="/patient-msg-img.png" alt="" />
              </div>

              <div className={styles.NameAndMsg}>
                <p>Jyoti Despandey</p>
                <p>I am feeling good, today</p>
              </div>

              <div className={styles.msgRight2}>
                <p>17:36</p>
                <p className={styles.one}>1</p>
              </div>
            </div>
            <p>
              - - - - - - - - - - - - - - - 14th January 2024 - - - - - -
              - - - - - - - - - -
            </p>


            <div className={styles.msg}>

              <div className={styles.MsgLeft}>
                <img src="/patient-msg-img.png" alt="" />
              </div>

              <div className={styles.NameAndMsg}>
                <p>Jyoti Despandey - Heart Patient</p>
                <p>I am feeling good, today</p>
              </div>

              <div className={styles.msgRight}>
                <p>17:36</p>
                <p className={styles.one}>1</p>
              </div>
            </div>
            </div>
      </section>

      {/* Add more sections/components as needed */}
    </div>
    </>
  );
};

export default DoctorDashboard;
