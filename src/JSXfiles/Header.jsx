import React from "react";
import "../CSSfiles/Header.css";

export default function Head(){
    return (
        <div style={{marginTop:8,backgroundColor:"#D0D3D4 ",borderRadius:20,marginBottom:0}}>

           <div className="first">
            <button style={{backgroundColor:"red" ,borderColor:"red"}}></button>
            <button style={{backgroundColor:"blue",borderColor:"blue"}}></button>
            <button style={{backgroundColor:"green",borderColor:"green"}}></button>
            <button style={{backgroundColor:"yellow" ,borderColor:"yellow"}}></button>
           </div>

           
           <div className="second">
            <button><a style={{textDecoration:"none",color:"black"}} href="#Give">About</a></button>
            <button><a style={{textDecoration:"none",color:"black"}} href="#feat">Features</a></button>
            <button><a href="#lm" style={{textDecoration:"none",color:"black"}}>Navigator</a></button>
           </div>

            <div className="third" >
                <button><a href="#footer" style={{textDecoration:"none",color:"white"}}>Contact</a></button>
                <button><a href="https://jangirvipin.github.io/vipin-react/" style={{textDecoration:"none",color:"white"}}>Other</a></button>
            </div>

        </div>
    )
}