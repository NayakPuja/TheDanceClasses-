import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import contact from '../Images/contact.jpg';

const Contact=()=>{
    const [msg, setMsg] = useState({
        name : "",
        phone:"",
        email : "",
        message : ""
      });

      const handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;

        setMsg({...msg, [name]:value});
      }
       
      const handleSubmit=async(event)=>{
        event.preventDefault();

        const{name, phone, email,message}=msg;
        try{
            const res= await fetch('/message',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,phone,email,message
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Message Not Sent. Try Again Later")
              }else{

                window.alert("Message Sent");
        setMsg({
          name : "",
          phone:"",
          email : "",
          message : ""
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }

return(
    <>
    
    <section id="contact">
        <div className="container my-5 py-5 shadow">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="container">
          <div className="row">
            <div className="col-md-6">
<form onSubmit={handleSubmit} method="POST">
  <label>Name</label>
  <input type="text"  placeholder="name" name="name" value={msg.name} onChange={handleChange} ></input><br />

 <label>Email</label>
  <input type="email" placeholder="email" name="email" value={msg.email} onChange={handleChange}></input><br />

  <label>Phone</label>
  <input type="text"  placeholder="phone" name="phone" value={msg.phone} onChange={handleChange}></input><br />

  <label>Message</label>
  <input type="text" placeholder="message" name="message" value={msg.message} onChange={handleChange}></input><br /><br />


<button type="submit">Submit</button>
</form>
</div>

<div className="col">
  <img src={contact} alt="" className="w-100 h-100"/>
</div>
</div>
</div>
</div>
</section>

{/*     
     <section className="mb-4 ">

        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
       <p className="text-center w-responsive mx-auto mb-5">Send us your queries and we will get back to you</p>

       <div className="container  bg-light">
       <div className="row">
            
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                  </div>
                  
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="phone"
                    name="phone"
                    value={msg.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          
         <div className="col-4 my-5 bg-red ">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Address :  Scheme No. 71,
                        Vijay Nagar ,
                        Indore Madhya Pradesh </p><br />
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>Call Us :   + 01 234 567 89 <br />
                    +7440961194</p><br />

                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p><br />
                </li>
            </ul>
        </div>
       

    </div>
    </div>
</section>  */}

    
    </>
);
}

export default Contact;