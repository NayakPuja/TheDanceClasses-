import React from "react";
import footer1 from '../Images/footer1.jpeg';
import footer2 from '../Images/footer2.webp';
import footer7 from '../Images/footer7.jpg';
import footer4 from '../Images/footer4.jpg';
import footer3 from '../Images/footer3.jfif';
import footer8 from '../Images/footer8.jpg';

const Footer=()=>{
return(
    <>
    <div>

<footer className="page-footer font-small mdb-color lighten-3 pt-4 bg-dark">
<div className="container">    
    <div className="row">
<div className="col-lg-2 col-md-12 mb-4">
<div className="view overlay z-depth-1-half">
          <img src={footer1} className="img-fluid"
            alt=""/>
  </div>
   </div>
    
      <div className="col-lg-2 col-md-6 mb-4">
      <div className="view overlay z-depth-1-half">
          <img src={footer2} className="img-fluid"
            alt=""/>
        </div>
      </div>
      
      <div className="col-lg-2 col-md-12 mb-4">
      <div className="view overlay z-depth-1-half">
          <img src={footer3} className="img-fluid "
            alt=""/>
        
        </div>
 </div>
      

      
      <div className="col-lg-2 col-md-6 mb-4">
     <div className="view overlay z-depth-1-half">
       <img src={footer7} className="img-fluid" alt=""/>
        </div>
      </div>
      
      <div className="col-lg-2 col-md-6 mb-4">
       <div className="view overlay z-depth-1-half">
          <img src={footer4} className="img-fluid"
            alt=""/>
      </div>
      </div>

      <div className="col-lg-2 col-md-6 mb-4">
       <div className="view overlay z-depth-1-half">
          <img src={footer8} className="img-fluid"
            alt=""/>
      </div>
      </div>
      
    </div>
    
  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a to="/"> MDBootstrap.com</a>
  </div>
  
</footer>

    </div>
    </>
);
}

export default Footer;