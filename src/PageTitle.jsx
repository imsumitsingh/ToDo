import React, { Component } from 'react'
    const PageTitle=(props)=>{
      return( <>
      <div className="container mt-2 mb-3 page-title-main">
        <div className="circle shadow" >
        </div>
            <span className="page-title">{props.title}</span>
        </div>
        </>
      );
    }
    export default PageTitle;