import React from 'react'
import './doctorReg1.css'
import { useNavigate } from 'react-router-dom'

const DoctorReg1 = () => {
    const navigate = useNavigate()
    function goToNextPage (){
        navigate('/DoctorLogIn/doctor/DoctorRegister/doctorReg2')
        console.log("clicked")
    }
  return (
    <>
  <div className="logo">
    <img src="/logo.png" alt="" />
  </div>
  <div className="containers">
    <div className="hero">
      <div className="heading">
        <h2>Registration</h2>
        <p className="doctText">
          Kindly fill up the details below to register as a doctor.
        </p>
      </div>
      {/* <br> */}
      <div className="boxes">
        <div className="box box1" />
        <div className="box box2" />
        <div className="box box3" />
      </div>
      <label htmlFor="hospitalname" className="lableText">
        Enter your Hospital Name{" "}
      </label>
      <input type="text" className="hospiName" placeholder="Zydus Hospital " />
      {/* <br> */}
      <label htmlFor="hospitallocation" className="lableText ">
        Enter Location of your Hospital
      </label>
      <input
        type="email"
        id="Email"
        className="hospiLoca "
        placeholder="1244, Sector 23, Ghaziabad, Delhi"
      />
      <label htmlFor="feildpractice" className="lableText ">
        Enter your field of Practice
      </label>
      <input
        type="password"
        className="fieldPractice "
        placeholder="Gynecologist"
      />
      <label htmlFor="graduationcertificate" className="lableText ">
        Upload your Graduation Certificate
      </label>
      <input type="file" defaultValue="" />
      <div className="uploadText">
        <span className="para1">The verification process may take upto</span>
        <span className="para2">2 days.</span>
      </div>
      <div className="button">
        <a href="">
          <button className="btn btn1">Back</button>
        </a>
        <div className="reset-continue">
          <button className="btn2" type="reset">
            Reset
          </button>
            <button onClick={goToNextPage} className="btn btn3">Continue</button>
        </div>
      </div>
    </div>
    <div className="card">
      <img src="/doct-regi.png" alt="" />
    </div>
  </div>
</>

  )
}

export default DoctorReg1
