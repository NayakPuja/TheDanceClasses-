import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup=()=>{
  const history = useHistory()

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
  });

  // Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {username, email, password} = user;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      
      const res = await fetch('/signup', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username, email, password
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Already Used Details")
      }
      
      else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Registered Successfully");
        history.push('/login')
      }
    } 
    
    catch (error) {
      console.log(error);
    }
  }

    return(
        <>
         <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h2 className="display-4 fw-bolder bg-red">Hello, Friend</h2>
            <p className="lead text-center bg-red">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn-primary text-center m-4 p-3 rounded-pill">
              Login
            </NavLink>
          </div> 

          <div className="col-md-6 p-5">
          <form onSubmit={handleSubmit} method="POST">
  <label>Name</label>
  <input type="text"  placeholder="name" name="username" value={user.username} onChange={handleInput} ></input><br />

 <label>Email</label>
  <input type="email" placeholder="email" name="email" value={user.email} onChange={handleInput}></input><br />

  <label>Password</label>
  <input type="password" placeholder="password" name="password" value={user.password} onChange={handleInput}></input><br />



<button type="submit">Signup</button>
</form>
</div>
</div>
</div>
        </>
    );
}

export default Signup ;