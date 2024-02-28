import { useState } from 'react'
import './App.css'
import Home from './Home/Home'
import Doctor from './DoctorLogIn/doctor'
import Patient from './PatientLogIn/patient'
import Pharmacy from './PharmacyLogIn/pharmacy'
import Laboratory from './LaboratoryLogIn/laboratory'
import DoctorReg0 from './DoctorLogIn/DoctorRegister/doctorReg0'
import DoctorReg1 from './DoctorLogIn/DoctorRegister/doctorReg1'
import DoctorReg2 from './DoctorLogIn/DoctorRegister/doctorReg2'
import DoctorDashboard from './DoctorDashboard/DoctorDashboard'
import PatientReg0 from './PatientLogIn/PatientRegister/patientReg0'
import PatientReg1 from './PatientLogIn/PatientRegister/patientReg1'
import PatientReg2 from './PatientLogIn/PatientRegister/patientReg2'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home/>}>
                    {/* <Route index element={<Home/>} /> */}
                 </Route>

                    <Route exact path="/DoctorLogIn/doctor"  element={<Doctor/>} />
                    <Route exact path="/PatientLogIn/patient"  element={<Patient/>} />
                    <Route exact path="/PharmacyLogIn/pharmacy"  element={<Pharmacy/>} />
                    <Route exact path="/LaboratoryLogIn/laboratory"  element={<Laboratory/>} />
              </Routes>
              <Routes>
                    <Route exact path="/DoctorLogIn/doctor/DoctorRegister/doctorReg0"  element={<DoctorReg0/>} />
              </Routes>
              <Routes>
                    <Route exact path="/DoctorLogIn/doctor/DoctorRegister/doctorReg1"  element={<DoctorReg1/>} />
              </Routes>
              <Routes>
                    <Route exact path="/DoctorLogIn/doctor/DoctorRegister/doctorReg2"  element={<DoctorReg2/>} />
              </Routes>
              <Routes>
                    <Route exact path="/DoctorDashboard"  element={<DoctorDashboard/>} />
              </Routes>
              <Routes>
                    <Route exact path="/PatientLogIn/PatientRegister/patientReg0"  element={<PatientReg0/>} />
              </Routes>
              <Routes>
                    <Route exact path="/PatientLogIn/PatientRegister/patientReg1"  element={<PatientReg1/>} />
              </Routes>
              <Routes>
                    <Route exact path="/PatientLogIn/PatientRegister/patientReg2"  element={<PatientReg2/>} />
              </Routes>

              
         </BrowserRouter>
    </>
  )
}

export default App
