import React from 'react'
// import "./doctorReg2.css"
import { useNavigate } from 'react-router-dom'

const PatientReg2 = () => {
  const navigate = useNavigate()
  function goToNextPage (){
      navigate('/')
      console.log("clicked")
  }
  return (
    <>
  <div className="logo">
    <img src="/logo.png" alt="" />
  </div>
  <div className="container">
    <div className="hero">
      <div className="heading">
        <h2>Thank you for Registering</h2>
        <p>
          We will send you a login link in the mail along with your Doctor ID
          and Password once your certificate is verified.
        </p>
      </div>
      <a href="">
        <button className="gLogin">
          <img src="/SSO Icon.png" className="gicon" alt="" />
          Login with Google
        </button>
      </a>
        <button onClick={goToNextPage}  className="btn btn-1">Back</button>
    </div>
    <div className="card">
      <img src="/thankyou-img.png " alt="" />
    </div>
  </div>
</>

  )
}

export default PatientReg2
