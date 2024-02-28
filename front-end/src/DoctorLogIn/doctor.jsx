import React from 'react'
import styles from './doctor.module.css'; // import CSS module
import { Outlet, Link } from "react-router-dom";

const Doctor = () => {
  return (
    <>
    <div>
  <div className={styles.logo}>
    <img src="/logo.png" className={styles.logoImg} alt="" />
  </div>
  <div className={styles.container}>
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h2>Doctor log In</h2>
        <p className={styles.doctText}>
          Kindly fill up the details below to register as a doctor.
        </p>
      </div>
      <form action="">
        <div className={styles.doctorId}>
          <div>
            <label htmlFor="doct-id">Doctor ID</label>
          </div>
          <br />
          <div>
            <input type="text" className={styles.doctIdClass} id="doct-id" placeholder="Enter your Doctor ID" />
          </div>
        </div>
        <div className={styles.doctorPsw}>
          <div><label htmlFor="psw">Password</label></div>
          <br />
          <div>
            <input type="password" id="psw" className={styles.doctPswClass} placeholder="Enter your Password" />
          </div>
        </div>
        <a href="" className={styles.forgotPsw}>Forgot Password?</a>
        <div className={styles.button}>
          <Link to="./DoctorRegister/doctorReg0"><button className={`${styles.btn} ${styles.btn-1}`}>Register</button></Link>
          <button className={`${styles.btn} ${styles.btn2}`}>Login</button>
        </div>
        <button className={styles.gLogin}>
          <img src="/SSO Icon.png" alt="" />
          Login with Google
        </button>
      </form>
    </div>
    <div className={styles.card}>
      <img src="/Antoni Shkraba.png" alt="" />
    </div>
  </div>
  <Outlet />
</div>
</>

  )
}

export default Doctor
