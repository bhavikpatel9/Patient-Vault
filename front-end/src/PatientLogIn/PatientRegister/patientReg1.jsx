import React from 'react'
import styles from './patientReg1.module.css'  
import { useNavigate } from 'react-router-dom'

const PatientReg1 = () => {
    const navigate = useNavigate()
    function goToNextPage (){
        navigate('/PatientLogIn/PatientRegister/patientReg2')
        console.log("clicked")
    }
  return (
    <>
  <div className={styles.logo}>
    <img className={styles.logoImg} src="/logo.png" alt="" />
  </div>
  <div className={styles.containers}>
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h2>Registration</h2>
        <p className={styles.doctText}>
          Kindly fill up the details below to register as a doctor.
        </p>
      </div>
      {/* <br> */}
      <div className={styles.boxes}>
        <div className={`${styles.box} ${styles.box1}`} />
        <div className={`${styles.box} ${styles.box2}`} />
        <div className={`${styles.box} ${styles.box3}`} />
      </div>
      
      {/* <br> */}
      <label htmlFor="hospitallocation" className={styles.lableText }>
        Enter your Aadhar Card
      </label>
      <input
        type="number"
        id="num"
        className={styles.hospiLoca }
        placeholder="1234 1234 1234"
      />
      
      <label htmlFor="graduationcertificate" className={styles.lableText }>
        Upload your Aadhar Card
      </label>
      <input type="file" defaultValue="" />
      <div className={styles.uploadText}>
        <span className={styles.para1}>The verification process may take upto</span>
        <span className={styles.para2}>2 days.</span>
      </div>
      <div className={styles.button}>
        <a href="">
          <button className={`${styles.btn} ${styles.btn1}`}>Back</button>
        </a>
        <div className={styles.resetContinue}>
          <button className={styles.btn2} type="reset">
            Reset
          </button>
            <button onClick={goToNextPage} className={`${styles.btn} ${styles.btn3}`}>Continue</button>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="/doct-regi.png" alt="" />
    </div>
  </div>
</>

  )
}

export default PatientReg1
