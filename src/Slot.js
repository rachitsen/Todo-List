// import React from "react";
// import "./App.css";
// import Image from "./Image"
// import list from  "./list"
// const para={
//     textAlign:'center',
//     background:'grey',
//     color:'yellow',
//     marginTop:'0px',
//     fontSize:'20px'
// }
// const imgi={
//     display: "block",
//     marginLeft: "auto",
//     marginRight: "auto",
    
// }
// function Para(){
//     let series = "Netflix";
//   if(series != "Netflix")
//   {
//      return(
//         <>
//         <div className="row">
//         <div className="coloumn">
//         <div className="card">
//         <Image  img={list[0].img}/>
//           <div className="cardinfo">
//             <span className="card_category">{list[0].catg}</span>
//             <h3 className="card_title">{list[0].title}</h3>
//             <a href={list[0].link} target="_blanck">
//                 <button>Watch Now</button>
//             </a>
//             </div>
//           </div>
//         </div>
//         </div>
//     </>
//      )
//   }
//   else{
//     return(
//         <>
//         <div className="row">
//         <div className="coloumn">
//         <div className="card">
//         <Image  img={list[1].img}/>
//           <div className="cardinfo">
//             <span className="card_category">{list[1].catg}</span>
//             <h3 className="card_title">{list[1].title}</h3>
//             <a href={list[1].link} target="_blanck">
//                 <button>Watch Now</button>
//             </a>
//             </div>
//           </div>
//         </div>
//         </div>
//     </>
//     )
//   }
// }
// export default Para;

import React from "react";

const Slot = (props)=>
{
   let {x,y,z} = props;
   if(x==y && y==z){
   return (
    <>
      <div>
        <h2>{x} {y} {z}</h2>
        <h3>Hurrah! Its a Match</h3>
        <hr/>
      </div>
    </>
  )
   }
   else{
    return (
      <>
        <div>
          <h2>{x} {y} {z}</h2>
          <h3>Oops! You Missed it</h3>
          <hr/>
        </div>
      </>
    )
   }
}

export default Slot;