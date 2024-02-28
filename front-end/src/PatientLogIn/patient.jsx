import React from 'react'
import styles from './patient.module.css'
import { useNavigate } from 'react-router-dom'

const Patient = () => {
  const navigate = useNavigate();
  function ToRegisterPage(){
    navigate('./PatientRegister/patientReg0')
  }
  return (
    <>
    <div>
  <div className={styles.logo}>
    <img src="/logo.png" className={styles.logoImg} alt="" />
  </div>
  <div className={styles.container}>
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h2>Patient log In</h2>
        <p className={styles.doctText}>
          Kindly fill up the details below to register as a patient.
        </p>
      </div>
      <form action="">
        <div className={styles.doctorId}>
          <div>
            <label htmlFor="doct-id">Patinet ID</label>
          </div>
          <br />
          <div>
            <input type="text" className={styles.doctIdClass} id="doct-id" placeholder="Enter your Patient ID" />
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
          <button onClick={ToRegisterPage} className={`${styles.btn} ${styles.btn-1}`}>Register</button>
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
</div>
</>
  )
}

export default Patient
