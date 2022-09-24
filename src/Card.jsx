import React from "react";
import Image from './Image';
import './App.css'
function Card(props){
    return (<>
        <div className="row">
        <div className="coloumn">
        <div className="card">
        <Image  img={props.img}/>
          <div className="cardinfo">
            <span className="card_category">{props.catg}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blanck">
                <button>Watch Now</button>
            </a>
            </div>
          </div>
        </div>
        </div>
    </>);
}
export default Card;