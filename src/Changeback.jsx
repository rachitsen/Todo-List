import React,{useState} from "react";



const Changeback = () =>
{
    
    const [color,set] = useState("black");
    const [color1,set1] = useState("White");
    const [tex,set3] = useState("hi!👋 I am Rachit 😎")
    const change = () =>{
        let t1 = "I am Full Stack Developer 💻"
        set("white");
        set1("Black")
        set3(t1);

    }
    const bgback = ()=>
    {
        let t1 = "hi!👋 I am Rachit 😎"
        let col = "black";
        set(col)
        set1("white")
        set3(t1)
    }
    //let tex = "";
 return(
    <>
        <div className="center-div" style={{backgroundColor: color}}>
            <h1 style={{color: color1}}> {tex} </h1>
            <button className="btn" onMouseEnter={change} onMouseLeave={bgback}> follow me</button>
        </div>
    </>
 )
}

export default Changeback;