import React from "react";
import event1 from '../Images/event1.jpg';
import event2 from '../Images/event2.jpg';
import event3 from '../Images/event3.jpg';
import event4 from '../Images/event4.jpg';
import event7 from '../Images/event7.jpg';
const Events=()=>{
    return(
        <>
        <div className="container">
          <h3 className="my-5 text-center">Events and Upcoming Events</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nisl, blandit eu nunc in, blandit eleifend dui. Donec quis tempus ipsum. Nullam tempus.</p>
        </div>
<div className="container">
<div className="row">
<img src={event4} alt="" />
<h2 className="text-center mt-3">Gallery</h2>
<div className="row my-5 py-5">
  <div className="col-md-6">
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={event2} alt="" className="w-100" />
    </div>
    <div class="flip-box-back">
      <h2>B-Boying Dance</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nisl, blandit eu nunc in, blandit eleifend dui. Donec quis tempus ipsum. Nullam tempus.</p>
    </div>
  </div>
</div>
  </div>

  <div className="col-md-6">
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={event3} alt="" className="w-100" />
    </div>
    <div class="flip-box-back">
      <h2>Beautiful Contemporary</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nisl, blandit eu nunc in, blandit eleifend dui. Donec quis tempus ipsum. Nullam tempus.</p>
    </div>
  </div>
</div>
  </div>
</div>
</div>
</div>

      <div className="container justify-content-center">
        <div className="row">
<img src={event7} alt="" />
        </div>
        </div>  
        </>
    )
}

export default Events;