import './Home.css';
import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <div className="container">
            <div>
              <img className="wel-img" src="welcome-img.png" alt="" />
            </div>
            <div className="login-items">
              <Link to="../DoctorLogIn/doctor">
                <button className="btn">
                  <img src="/stethoscope.png" width="26px" height="26px" alt="" />
                  Login as a Doctor
                </button>
              </Link>
              <Link to="../PatientLogIn/patient">
                <button className="btn">
                  <img src="assist_walker.png" width="26px" height="26px" alt="" />
                  Login as a Patient
                </button>
              </Link>
              <Link to="../PharmacyLogIn/pharmacy">
                <button className="btn">
                  <img src="assist_walker.png" width="26px" height="26px" alt="" />
                  Login as a Pharma
                </button>
              </Link>
              <Link to="../LaboratoryLogIn/laboratory">
                <button className="btn">
                  <img src="assist_walker.png" width="26px" height="26px" alt="" />
                  Login as a Labora
                </button>
              </Link>
            </div>
          </div>
          <Outlet />
     </div>
    
  )
}

export default Home


