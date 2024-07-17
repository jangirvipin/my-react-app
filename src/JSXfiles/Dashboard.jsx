import React from "react";
import "../CSSfiles/Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dash(props){
    const navigate = useNavigate();
    return (
        <div  className="Dash">
            <p style={{color:"white", marginLeft:30,fontSize:40,paddingTop:10}}>{props.name}</p>
           <div className="z"><a className="ptag">{props.ranking}</a></div>
           <div className="z"><a className="ptag">{props.time}</a></div>
           <div className="z"><a className="ptag">{props.state}</a></div>
           <div className="z"><a className="ptag">{props.property}</a></div>
           <div className="z"><a className="ptag"> {props.propertyb} </a></div>
           <button className="backindia" onClick={()=>{navigate("/")}}>Back</button>
        </div>
    )
}