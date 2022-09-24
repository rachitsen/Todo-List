import React from "react";


const Todolist = (props)=>{


return (
    <>
        <button onClick={()=>{
                props.onselect(props.id);
            }
        } className="listbtn" style={{fontSize :'15px',padding:"10px",width:"65px",margin:'5px',marginLeft:'25px',display: 'inline-block'}}>Delete</button>
        <li style={{ display: 'inline-block',padding:'10px'}}>{props.text}</li>
        <br/>
       
        
    </>
)
}

export default Todolist;