import React, { useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList'
    const Todo=()=>{
     const [inputVal,setInputVal]=useState('');
     const [todo,setTodo]=useState([]);

const clickAdd=()=>{
    if(inputVal !=''){
    setTodo([...todo,inputVal]);
    setInputVal('');
}
}
const clickAddByEnter=(e)=>{
    if(e.keyCode===13){
    if(inputVal !=''){
    setTodo([...todo,inputVal]);
    setInputVal('');
    }
}    
    
};
const deleteList=(key)=>{
    const list=todo.filter((item,index)=>{
        return index!=key;
    });
    setTodo([...list]);
}
        return(<>
         <PageTitle title="Todo"></PageTitle>
         <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6">
                  <div className="w3-container w3-card-4 pt-4 todo-main" action="/action_page.php">
                      <h3 className="text-center">What's the plan for today ?</h3>
                  <div class="input-group mb-3">
  <input value={inputVal}  onKeyDown={clickAddByEnter}  onChange={(e)=>{setInputVal(e.target.value)}} type="text" class="form-control rounded-0" placeholder="Type your todo here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button onClick={clickAdd}   class="btn btn-warning rounded-0" type="button">Add</button>
  </div>
</div>

<br></br>
          <TodoList data={todo} del={deleteList}></TodoList>
                
                 
                       </div>
                   
                    </div>

                  </div>
              </div>
              
        </>);
    }
    export default Todo;