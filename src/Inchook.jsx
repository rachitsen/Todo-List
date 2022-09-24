import React, { useState } from "react";

const Inchook =() =>
{
   
   const [d,set] = useState(new Date().toLocaleTimeString());
  const Incme= ()=>{
    let newdate = new Date().toLocaleTimeString();
    set(newdate);
    
  };
  setInterval(Incme,1000)
  return(
    <>
        <h1>{d}</h1>
        {/* <button onClick={Incme} className = "btn">Get Time</button> */}
    </>
  )
}
export default Inchook;