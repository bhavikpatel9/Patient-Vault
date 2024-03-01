import React from 'react';
import { Outlet, Link } from "react-router-dom";
// import './Home.css';
import styles from './Home.module.css'; // import CSS module


const Home = () => {
  return (
    <>
    <div>
        <div className={styles.logo}>
          <img src="/logo.png" className={styles.logoImg} alt="" />
        </div>
        <div className={styles.container}>
          <div>
            <img className={styles.welImg} src="/welcome-img.png" alt="" />
          </div>
          <div className={styles.loginItems}>
            <Link to="../DoctorLogIn/doctor" className={styles.link}><button className={styles.btn}>
                <img src="/stethoscope.png" style={{"width" :"26px", "height":"26px" }} width="26px" height="26px" alt="" />
                Login as a Doctor
              </button></Link>
            <Link to="../PatientLogIn/patient" className={styles.link}>
              <button className={styles.btn}>
                <img src="/assist_walker.png" style={{"width" :"26px", "height":"26px" }} width="26px" height="26px" alt="" />Login as a Patient
              </button></Link>
            <Link to="../PharmacyLogIn/pharmacy" className={styles.link}><button className={styles.btn} style={{paddingRight: '6.5rem'}}>
                <img src="/pharmacy.png" style={{"width" :"26px", "height":"26px" }} width="26px" height="26px" alt="" />
                Login as a Pharmacy
              </button></Link>
            <Link to="../LaboratoryLogIn/laboratory" className={styles.link}> <button className={styles.btn} style={{paddingRight: '6.99rem'}}>
                <img src="/laboratory.png" style={{"width" :"26px", "height":"26px" }} width="26px" height="26px" alt="" />Login as a Labratory
              </button></Link>
          </div>
        </div>
        <Outlet />
      </div>
      </>
    // <div>
    //   <div className={logo">
    //         <img src="logo.png" alt="" />
    //       </div>
    //       <div className={container">
    //         <div>
    //           <img className={wel-img" src="welcome-img.png" alt="" />
    //         </div>
    //         <div className={login-items">
    //           <Link to="../DoctorLogIn/doctor" className='link'>
    //             <button className={btn">
    //               <img src="/stethoscope.png" style={{"width" :"26px", "height":"26px" }}
    //                alt="" />
    //               Login as a Doctor
    //             </button>
    //           </Link>
    //           <Link to="../PatientLogIn/patient" className='link'>
    //             <button className={btn">
    //               <img src="/assist_walker.png" style={{"width" :"26px", "height":"26px" }}  alt="" />
    //               Login as a Patient
    //             </button>
    //           </Link>
    //           <Link to="../PharmacyLogIn/pharmacy" className='link'>
    //             <button className={btn">
    //               <img src="/assist_walker.png" style={{"width" :"26px", "height":"26px" }}  alt="" />
    //               Login as a Pharmacy
    //             </button>
    //           </Link>
    //           <Link to="../LaboratoryLogIn/laboratory" className='link'>
    //             <button className={btn">
    //               <img src="/Frame 1000002298.png" style={{"width" :"26px", "height":"26px" }}  alt="" />
    //               Login as a Laboratory
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //       <Outlet />
    //  </div>

    
  )
}

export default Home


