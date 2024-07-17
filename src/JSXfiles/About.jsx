import React from "react";
import Cal from "./calculator";

export default function Ab(props){
    return (
        <div>
        <div style={{display:"flex",alignContent:"center"}}>
            <div style={{marginLeft:100 ,backgroundColor:"rgba(197, 174, 174, 0.272)",paddingTop:7,paddingBottom:7,paddingLeft:30,paddingRight:30,borderRadius:30,marginTop:30,height:150}}>
            <Cal></Cal>
            </div>
           <div style={{backgroundColor:"rgba(197, 174, 174, 0.272)",marginTop:30,marginLeft:60,width:300,height:160,borderRadius:30,display:"inline-block"}}>
            <h1 style={{marginLeft:35,color:"white", fontSize:35,height:30}}>{props.aname} <span style={{marginLeft:20}}>{props.bname}</span></h1>
            <h1 style={{marginLeft:35,color:"white", fontSize:35}}> {props.cname}<span style={{marginLeft:20}}>{props.dname}</span></h1>
           </div>
        </div>
      
            <div style={{marginTop:20,marginLeft:20}}>
                <p style={{color:"white",marginLeft:10 ,fontSize:20}}>About</p>
                <div style={{display:"flex",alignContent:"center"}}>

                <div style={{width:250,height:300,borderStyle:"solid",borderColor:"white",borderWidth:1,borderRadius:30 ,color:"white",fontSize:19,paddingLeft:10,paddingTop:14}}>
                {props.first}
                </div>
                <div style={{width:250,height:300, marginLeft:20,borderRadius:30,borderStyle:"solid",borderColor:"white",borderWidth:1,color:"white",fontSize:19,paddingLeft:10,paddingTop:14}}>
                {props.second}
                </div>
                <div style={{width:250,height:300, marginLeft:20,borderRadius:30,borderStyle:"solid",borderColor:"white",borderWidth:1,color:"white",fontSize:19,paddingLeft:10,paddingTop:14}}>
                {props.third}
                </div>
                  </div>
              
            </div>

        </div>
    )
}