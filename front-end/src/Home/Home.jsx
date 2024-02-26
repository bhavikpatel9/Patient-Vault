import './Home.css';
import React from 'react';


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
              <button className="btn btn-1">
                <img src="stethoscope.png" width="26px" height="26px" alt="" />
                <a href="../DoctorLogIn/doctor.jsx">Login as a Doctor</a>
              </button>
              <button className="btn btn-2">
                <img src="assist_walker.png" width="26px" height="26px" alt="" /><a href="">Login as a Patient</a>
              </button>
              <button className="btn btn-3">
                <img src="pharmacy.png" width="26px" height="26px" alt="" />
                <a href="">Login as a Pharmacy</a>
              </button>
              <button className="btn btn-4">
                <img src="laboratory.png" width="26px" height="26px" alt="" />
                <a href="">Login as a Labratory</a>
              </button>
            </div>
          </div>
          {/*  */}
     </div>
    
  )
}

export default Home


// var NewComponent = React.createClass({
//     render: function() {
//       return (
//         <div>
//           {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> */}
          
          
//       );
//     }
//   });