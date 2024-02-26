import { useState } from 'react'
import './App.css'
import DoctorDashboard from './components/DoctorDashboard'
import Home from './Home/Home'
import Doctor from './DoctorLogIn/doctor'
import Patient from './PatientLogIn/patient'
import Pharmacy from './Pharmacy/pharmacy'
import Laboratory from './LaboratoryLogIn/laboratory'

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
         </BrowserRouter>
      {/* <DoctorDashboard/> */}
      
    </>
  )
}

export default App
