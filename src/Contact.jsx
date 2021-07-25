import React, { Component } from 'react';
import PageTitle from './PageTitle';
    const Contact=()=>{
        return(<>
         <PageTitle title="Contact"></PageTitle>


         <div className="container">
             <div className="card  p-0">
             <div  className="row card-body p-0 bg-dark text-white  ">
                 <div className="col-md-3 d-flex align-items-center contact-info">
                 <div  className="row ">
                     
                 <div className="col-md-3 ">
                     
                     <span className=""><i className="fa-3x fas fa-user"></i></span>
 
 
                      </div>
                      <div className="col-md-8">
                     <p className="font-weight-bold"><strong>Sumit Kumar</strong><br></br>.Net Developer</p>
                        
 
                      </div>
                    
                      
                 <div className="col-md-3">
                     
                    <span className="pills badge-danger"><i className=" fa-3x fas fa-home"></i></span>


                     </div>
                     <div className="col-md-9">
                    <p>Gandhi Chowk.Mahendru,<br></br>Patna,800006<br></br></p>
                       

                     </div>
                     
                     <div className="col-md-3">
                    <span className="pills badge-danger"><i className="fa-3x fas fa-envelope"></i></span>


                     </div>
                     <div className="col-md-9">
                    <p>sumit@dotplus.in<br></br>sumit55255@gmail.com</p>
                       

                     </div>
                     
                     <div className="col-md-3">
                    <span className="pills badge-danger"><i className=" fa-3x fas fa-phone"></i></span>


                     </div>
                     <div className="col-md-9">
                    <p>+918227092687<br></br>+918227092687</p>
                       

                     </div>
                     
                     </div>
                   
 
  
 
                   </div>

                
                 <div className="col-md-5 contact-form">

                 <form >
                 <div className="form-group mb-2">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    placeholder="Enter Name" />
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputEmail1">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    placeholder="Enter Email" />
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile No." />
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputEmail1">Message</label>
    <textarea row="20" className="form-control" id="exampleInputEmail1" 
    placeholder="Type your comment here" />
  </div>
  <div className="form-group mb-2 text-right">
  <button type="submit" className="w3-btn w3-deep-orange">Submit</button>
  </div>
</form>
</div>
<div className="col-md-4 contact-h d-flex justify-content-center align-items-center">
   <h1>
       Find Us to grow with us.
   </h1>

</div>
</div>
</div>
         </div>      
             

         
        </>);
    }
    export default Contact;