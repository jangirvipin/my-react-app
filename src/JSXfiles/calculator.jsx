import React, { useEffect, useRef, useState } from "react";

export default function Cal(){
    var a=new Date()
 
   var c=a.toLocaleTimeString()
   const [state,setstate]=useState(c);

   useEffect(() => {
    let interval;
    if (true) {
        interval = setInterval(() => {
            setstate(prevTime => prevTime+10);
           
        },10);
    } 
    
    return () => clearInterval(interval);
}, []);

   return <div>
    <h1 style={{color:"white"}}>{a.toDateString()}</h1>
    <h1 style={{color:"white"}}>{c}</h1>
   
   </div>
}