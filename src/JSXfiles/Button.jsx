import React from "react";
import "../CSSfiles/button.css"
import { useNavigate } from "react-router-dom";

export default function Button(){
    const navigate = useNavigate();
    return (
        <div className="border" id="lm">

        <div className="fbutton" >
        <button className="abutton" onClick={()=>{ navigate("/India")}}>India</button>
        <button className="abutton" onClick={()=>{navigate("/America")}}>America</button>
        <button className="abutton" onClick={()=>{navigate("/England")}}>England</button>
        <button className="abutton" onClick={()=>{navigate("./China")}}>China</button>
        <button className="abutton" onClick={()=>{navigate("./Japan")}}>Japan</button>
        </div>
        

        <div className="mbutton">
        <button className="abutton" onClick={()=>{navigate("./Indonesia")}}>Indonesia</button>
        <button className="abutton" onClick={()=>{navigate("./Switzerland")}}>Switzerland</button>
        <button className="abutton" onClick={()=>{navigate("./Canada")}}>Canada</button>
        <button className="abutton" onClick={()=>{navigate("./Nepal")}}>   Nepal</button>
        <button className="abutton" onClick={()=>{navigate("./Pakistan")}}>Pakistan</button>
        </div>

        <div className="lmbutton" >
        <button className="abutton" onClick={()=>{navigate("./SriLanka")}}>Sri Lanka</button>
        <button className="abutton" onClick={()=>{navigate("./Russia")}}>Russia</button>
        <button className="abutton" onClick={()=>{navigate("./Northkorea")}}>North Korea</button>
        <button className="abutton" onClick={()=>{navigate("./SouthKorea")}}>South Korea</button>
        <button className="abutton" onClick={()=>{navigate("./Afganistan")}}>Afganistan</button>
        </div>

       

        </div>
    )
}