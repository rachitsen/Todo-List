import React, { useState } from "react";

const Form = () =>{
     
    const [val,set] = useState({
        fname: "",
        lname: "",
        email: "",
    });

    const Inevent = (event) =>{
        
        const {name,value} = event.target;
        set((preValue) =>{
           return{
            ...preValue,
            [name]:value,
           } 
        });
     };
    
   
    const Myfun = (event) =>{
        event.preventDefault();
        alert("submitted")
    }
    
    return(
        <>
        <div className="card">
        <form onSubmit={Myfun}>
        <div >
            <h1>hello! {val.fname} {val.lname}</h1>
            <h3>{val.email}</h3>
            <input placeholder="Type First name" name="fname" onChange={Inevent} /><br/>
            <input placeholder="Type Last name" name="lname"  onChange={Inevent}/><br/>
            <input placeholder="Type Last name" name="email"  onChange={Inevent}/><br/>
            <button className="btn" type = "submit">Login</button>
            </div>
            </form> 
            </div> 
        </>
    )
    }

export default Form;