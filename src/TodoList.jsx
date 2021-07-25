import React, { useState } from 'react'

const TodoList=(props)=>{
    
return(
      
    <div className="todo-list">
    <div className="todo-content">

        {
            props.data.map((item,index,arr)=>{
              return  <div key={index} className="w3-panel w3-leftbar w3-border-blue w3-pale-blue pt-2  w3-display-container position-relative">
                <span onClick={()=>{props.del(index)}} class="btnclose position-absolute top-50 end-0 translate-middle   p-1 rounded-circle">
                <span className="btn-cir" ><i className="fas fa-trash text-danger"></i></span>
                 </span>
                 
              <p className="pt-2">{item}</p>
            
               </div>
            })
        }
    
    </div>
   </div>

);
}
export default TodoList;
