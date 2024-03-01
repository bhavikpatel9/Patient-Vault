import React from 'react'
import './patientDashboard.css'

const PatientDashboard = () => {
  return (
    <>
      <section className="fullPage">
        <nav>
          <img src="/Frame 1000002286.png" alt="" />
        </nav>

        <section className="main">
          <div className="SearchBox">
            <input type="text" className="placeholderText" placeholder="PatientID, Appointment, etc   " />
            <button><img src="/search (1).png" alt="" /></button>
          </div>

          <div className="doctorWelcome">
            <p>Good Morning,</p>
            <h3 className="DoctorName">Dr. Zeus Walter</h3>
            <p>You are having a busy day today, have a good day today!</p>
          </div>
          <div className="bottomSection">
            <div className="gridContainer">

              <div className='gridItem1'>
                <div className="to">
                  <p><b>Today's Medicine Dose</b></p>
                  <u>view list of medicines</u>
                </div>
                <div className="dr">
                  <p><b>Dr. Smith</b></p>
                  <p>Prescribed by</p>
                </div>
                <div className="bre">
                  <div className="breakfast">
                    <img className="icons" src="/wb_twilight.png" alt="" />
                    <p>Breakfast</p>
                  </div>
                  <div className="lunch">
                    <img className="icons" src="/light_mode.png" alt="" />
                    <p>Lunch</p>
                  </div>
                  <div className="dinner">
                    <img className="icons" src="dark_mode.png" alt="" />
                    <p>Dinner</p>
                  </div>
                </div>

                <button className="comp">Complete</button>
              </div>
              <div className='gridItem2'>
              <div className="appointment">
              <h3>Upcoming Appointment</h3>
              <div className="consultation">
                <p>Consultation with Dr.James(Physician)</p>
                <p className='feb'>February 14, 2024</p>
              </div>

              </div>
                
                <p className='horizontal'></p>
                <p>Check previous appointments </p>
              </div>
              <div className='gridItem3'>3</div>
              <div className='gridItem4'>4</div>
              <div className='gridItem5'>5</div>
            </div>
            <div>
              {/* kaik */}
            </div>
          </div>


        </section>
      </section>
    </>
  )
}

export default PatientDashboard
