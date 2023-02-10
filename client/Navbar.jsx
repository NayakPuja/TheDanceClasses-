import React from "react";
import{NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar=()=>{
    return (
      <div>
      <nav className="navbar navbar-expand-lg  nav-color">
  <div className="container">
    
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      {/* <NavLink className="navbar-brand" to="#">
      <img src={lo} alt="" width="100%" height="35px"/>
    </NavLink>
         */}
        <li className="nav-item">
          <NavLink className="nav-link active " aria-current="page" to="/">Welcome</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/timetable">Timetable</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/events">Events</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill text-white">
         <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill text-white">
      <i className="fa fa-user-plus me-2"></i>SignUp</NavLink>
      
    </div>
  </div>
</nav>

</div>
);
};

export default Navbar;