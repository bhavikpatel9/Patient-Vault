import React from 'react'
import styles from './doctorReg2.module.css'
import { useNavigate } from 'react-router-dom'

const doctorReg2 = () => {
  const navigate = useNavigate()
  function goToNextPage (){
      navigate('/DoctorDashboard')
      console.log("clicked")
  }
  return (
    <>
  <div className={styles.logo}>
    <img src="/logo.png" alt="" />
  </div>
  <div className={styles.container}>
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h2>Thank you for Registering</h2>
        <p>
          We will send you a login link in the mail along with your Doctor ID
          and Password once your certificate is verified.
        </p>
      </div>
      <a href="">
        <button className={styles.gLogin}>
          <img src="/SSO Icon.png" className={styles.gicon} alt="" />
          Check Gmail Box
        </button>
      </a>
        <span><button onClick={goToNextPage}  className={`${styles.btn}`}>Back</button></span>
    </div>
    <div className={styles.card}>
      <img src="/thankyou-img.png " alt="" />
    </div>
  </div>
</>

  )
}

export default doctorReg2
