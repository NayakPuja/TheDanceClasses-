import React from "react";
import Img1 from '../Images/Img1.jpg';
import Img2 from '../Images/Img2.jpg';

const Timetable=()=>{
    return(
        <>
        <div className="container text-center mt-5">
            <h3>Our Class schedule</h3>
            <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nisl,
                 blandit eu nunc in, blandit eleifend dui. Donec quis tempus ipsum. Nullam 
                 tempus.</p>
        </div>

        <div className="Container mt-5 bg-light ">
          
        <table className="table table-hover border-bottom my-5 ">
    <thead >
      <tr className="bg-red">
        <th>Days</th>
        <th>Timing</th>
        <th>Class-type</th>
        <th>Trainer</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday</td>
        <td>9:00 am to 11:00am</td>
        <td>Bollywood</td>
        <td>John</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>10:00 am to 11am</td>
        <td>Classical</td>
        <td>Siya</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>12:00 am to 1pm</td>
        <td>Group Dance</td>
        <td>Saroj</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>1:00 pm to 2pm</td>
        <td>Contemporary</td>
        <td>Neha</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>2:00 pm to 3:00pm</td>
        <td>Hip-Hop</td>
        <td>Dharmesh</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>3:00 pm to 4:00pm</td>
        <td>Beginners</td>
        <td>Bhavna</td>
      </tr>
    </tbody>
  </table>
   </div>


<h3 className="text-center ">What we offer</h3>
<section id="offer">
<div className="container">
<div className="row my-5">
  
<div className="col-sm-4  zoom">
  <img src={Img1} alt="" />
</div>
<div className="col-sm-4 zoom2">
  <img src={Img2} alt="" />
</div>
</div>
 </div>
 </section>


    
        </>
    )
} 


export default Timetable;