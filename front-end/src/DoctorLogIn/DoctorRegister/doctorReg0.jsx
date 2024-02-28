import React from 'react'
import styles from './doctorReg0.module.css'
import { useNavigate } from 'react-router-dom'

const DoctorReg0 = () => {
  const navigate = useNavigate()
  function goToNextPage (){
      navigate('/DoctorLogIn/doctor/DoctorRegister/doctorReg1')
      console.log("clicked")
  }

  return (
    <>
  <div className={styles.logo}>
    <img className={styles.logoImg} src="/logo.png" alt="" />
  </div>
  <div className={styles.container}>

  <div className={styles.hero}>
  <div className={styles.heading}>
    <h2>Registration</h2>
    <p className={styles.doctText}>
      Kindly fill up the details below to register as a doctor.
    </p>
  </div>
  {/* <br> */}
  <div className={styles.boxes}>
    <div className={`${styles.box}`} />
    <div className={`${styles.box} ${styles.box2}`} />
    <div className={`${styles.box} ${styles.box3}`} />
  </div>
  <form action="">
    <div className={styles.fisrtLastName}>
      <div className={styles.firstname}>
        <div>
          <label htmlFor="first-name">First Name</label>
        </div>
        <br />
        <div>
          <input
            type="text"
            id="first-name"
            className={styles.firstName}
            placeholder="John"
          />
        </div>
      </div>
      <br />
      <div className={styles.lastname}>
        <div>
          <label htmlFor="last-name">Last Name</label>
        </div>
        <br />
        <div>
          <input
            type="text"
            id="last-name"
            className={styles.lastName}
            placeholder="Doe"
          />
        </div>
      </div>
    </div>
    {/* <br> */}
    <label htmlFor="Email">E-mail</label>
    <input
      type="email"
      id="Email"
      className={styles.email}
      placeholder="Enter your email"
    />
    <label htmlFor="password">Password</label>
    <input type="password" className={styles.psw} placeholder="******" />
    <p className={styles.pswPara}>Must Contain 8 Char.</p>
    <label htmlFor="conformpassword">Conform Password</label>
    <input type="password" className={styles.confoPsw} placeholder="******" />
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
  </form>
</div>

    <div className={styles.card}>
      <img src="/doct-regi.png" alt="" />
    </div>
  </div>
</>

  )
}


export default DoctorReg0
