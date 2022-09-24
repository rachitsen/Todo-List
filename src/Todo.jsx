import React, { useState } from "react";
import Todolist from "./Todolist";
const Todo = ()=>{

    const [inputlist,setinputlist] = useState("")
    const [item,setitem] = useState([]);


    const itemevent= (event) =>{
      setinputlist(event.target.value)
    }

    const listofitems = ()=>{
        setitem((olditem)=>{
            return [...olditem,inputlist];
        })
        setinputlist("")
    }

    const Delitem=(id) =>{
      console.log()

      setitem((olditem)=>{
      return olditem.filter((arrelem,index)=>{
        return index !== id;
      });
    });
  };
  return(
    <>
      <div className="main_div">
            <div className="cards">
            <br/>
            <h1 style={{color: 'white',boxShadow : "1px 1px 6px 2px black"}}>ToDo List</h1>
            
            <br/>

            <input type="text" placeholder="Add a Items" onChange={itemevent} value={inputlist}/>
            <button className = "mainbtn" onClick={listofitems}>+</button>
            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'left',texAlign: 'left'}}>
            <ol>
                
                {
                    item.map((itemval,index) =>{
                        return <Todolist 
                          text={itemval}
                          key = {index}
                          id = {index}
                          onselect = {Delitem}
                        />;
                    })
                }
            </ol>
            </div>
            </div>
            
         </div>   
    </>
  )
}

export default Todo;