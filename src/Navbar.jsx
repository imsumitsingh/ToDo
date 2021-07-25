import React, { Component } from 'react'
import {NavLink  } from "react-router-dom";
const Navbar=()=>{
return(
<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <NavLink activeClassName="text-white" className="navbar-brand" to="/"><strong className="font-weight-bold text-warning br-f">R</strong>eact</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto text-uppercase">
      <li className="nav-item">
        <NavLink activeClassName="active" exact  className="nav-link " to="/"> Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName="active" exact className="nav-link  " to="/about">about <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" exact  className="nav-link" to="/todo">Todo</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName="active" exact className="nav-link " to="/product">Product</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName="active" exact className="nav-link " to="/contact">Contact</NavLink>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
 




</>



);
};
export default Navbar;