import React,{useState} from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import cover3 from '../Images/cover3.jpg';
import cover4 from '../Images/cover4.jpg';
import cover5 from '../Images/cover5.jpg';
import bg from '../Images/bg.png';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

  
const Welcome=(props)=>{
  const [enquire, setEnquire] = useState({
    username : "",
    phone:"",
    city : "",
    course : ""
  });

  const handleInput=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    setEnquire({...enquire, [name]:value});
  }
   
  const handleSubmit=async(event)=>{
    event.preventDefault();

    const{username, phone,city,course}=enquire;
    try{
        const res= await fetch('/enquire',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,phone,city,course
            })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
            window.alert("Message Not Sent. Try Again Later")
          }else{

            window.alert("Message Sent");
    setEnquire({
      username : "",
      phone:"",
      city : "",
      course : ""
    })
    
  }
} catch (error) {
  console.log(error);
}
}  
  return(
      <>
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={cover3} className="d-block w-100 " alt="..."/>
      
    </div>
    
    <div className="carousel-item">
      <img src={cover4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={cover5} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

<div className="container py-5">
  <div className="row align-items-start bg-red">

  <div className="col ">
   <h6>Classical dance</h6>
     </div>

    <div className="col">
      <h6>Bollywood Dance</h6>
    </div>
    <div className="col">
    <h6>  Hip Hop Dance</h6>
    </div>
</div>
</div>

<div className="container-fluid text-center mt-2">
<h2>Dance dont need wings to fly</h2>
</div>
<div className="container">
  <div className="row my-5 py-5">
    <div className="col-6">
 <h3 className="text-center pt-5 border-bottom">OUR DANCE SCHOOL</h3>
 <p className="align-text">We hope to change the face of performing arts as we know it.Creating equity in the world of performing arts  is paramount to our endeavors at Dance in Color. 
   The Misty Copelands, Audra McDonalds, and Jonathan Bailey Hollands of the world have made it possible for children of all races to ‘Dream in Color'</p>
 <p className="align-text">Dance burns calories, strengthens muscles, improves balance, increases flexibility, and gives the heart a good workout. Dance has also been proven to increase cognitive development.</p>
 </div>


 <div className="col-6">
<img src={bg} alt="" />
 </div>
 </div>
</div>
 </div>



 <div className="container text-center my-5">
  <h3>Enquiry For more</h3>
  </div>

 <Popup trigger={<button className="btn btn-primary"> Enquire Now </button>}
	position="right center">
    <div className="Container-fluid">
<div className="col-12">
 <form onSubmit={handleSubmit} method="POST" id="fm">
<input type="text"  placeholder="Name"
className="form-control" name="username" 
value={enquire.username} onChange={handleInput} ></input><br />

<input type="phone" placeholder="Phone" className="form-control"
 name="phone" value={enquire.phone} onChange={handleInput}></input><br />

<input type="city" placeholder="City"className="form-control"
 name="city" value={enquire.city} onChange={handleInput}></input><br />

<input type="course" placeholder="Course you want to join"className="form-control" 
name="course" value={enquire.course} onChange={handleInput}></input><br />
{/* <select id="course" name="course">

    <option value="bollywood">Online course</option>
    <option value="age of 8 to 14">Age of 8 to 14</option>
    <option value="Bollywood">Bollywood Style</option>
    <option value="Group dance">Group dance</option>
  </select> */}
<button type="submit" className=" btn-primary text-center mt-4 rounded-pill">Submit</button>
</form>
	</div>
  </div>
	</Popup>
      </>  
        
    );
}



export default Welcome;