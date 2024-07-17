import React from "react";
import "../CSSfiles/Footer.css"

export default function Foot(){
    return (
       <div className="Feet" id="footer">
           <h1 style={{color:"white",marginLeft:200,paddingTop:80,width:600,display:"inline-block"}}>Connect with me</h1>

           <div style={{display:"inline-block",width:200,height:150,backgroundColor:"gray",borderRadius:10}}>
            <img className="ima" src="https://static.vecteezy.com/system/resources/thumbnails/000/357/012/small/1__288_29.jpg"></img>
            <a  href="https://jangirvipin.github.io/vipin-react/" style={{textDecoration:"none"}}><p style={{marginLeft:50,color:"white"}}>My Website</p></a>
           </div>

           <div style={{display:"inline-block",width:200,height:150,backgroundColor:"gray",borderRadius:10 ,marginLeft:20}}>
            <img className="ima" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Wqc57gepw2IpotvnxZlC-ssssp6qNlOYPA&s"></img>
            <a ><p style={{marginLeft:20,color:"white"}}>jangirsliet20@gmail.com</p></a>
           </div>

           <div style={{marginLeft:200 }}>
            <a  style={{color:"white" ,marginRight:20,textDecoration:"none"}} href="https://www.linkedin.com/in/vipin-jangir-7b2a58285">Linkdin</a>
            <a style={{color:"white",marginRight:20 ,textDecoration:'none'}} href="https://x.com/jangirvipin0?t=zo2WvVJ6DdtOUFdYCBdJsg&s=09">Twitter</a>
            <a style={{color:"white",marginRight:20,textDecoration:'none'} } href="https://leetcode.com/u/jangirsliet20/">Leetcode</a>
            <a style={{color:"white",marginRight:20,textDecoration:"none"}} href="https://github.com/jangirvipin">Github</a>
           </div>
           
       </div>
    )
}