import React, { Component } from 'react';
import banner from './banner.jpg';
    const Home=()=>{
      return( <>
        <div className="home-main">
                <img src={banner}></img>
            <div className="home-content">
                <div className="content"> 
                <h1>
                 React First Application
                </h1>
                <p>Try my best to deliver everything possible</p>
                <button className="btn btn-warning rounded-0  text-uppercase btn-lg mr-2">Get Latest</button>&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-warning rounded-0 text-uppercase btn-lg btn-flat mr-2">Contact Us</button>
                </div>
            </div>

        </div>
        </>
      );
    }
    export default Home;