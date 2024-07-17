import React from "react";
import "../CSSfiles/Swit.css"
import Dash from "./Dashboard.jsx";
import Ab from "./About.jsx"

const a="England, predominant constituent unit of the United Kingdom, occupying more than half of the island of Great Britain .Outside the British Isles, England is often erroneously considered synonymous with the island of Great Britain (England, Scotland, and Wales) and even with the entire United Kingdom."
const b="England’s contribution to both British and world culture is too vast for anything but a cursory survey here. Historically, England was a very homogeneous country and developed coherent traditions, but, especially as the British Empire expanded and the country absorbed peoples from throughout the globe, English culture has been accented with diverse contributions "

const c ="England is the largest of the four countries which make up the United Kingdom. It is on the island of Great Britain.Over 56.5 million people live in England (2021 estimate). This is 84% of the population of the United Kingdom.[4] The capital city of England is London. London is also the biggest city in the country. "
export default function Swit(){
    return (
        
             <div className="England" >
              <div className="EnglandA">
            <Dash name="England" ranking="6th GDP Ranking" time="GMT+1:00" state="0 states" property="Part of UK" propertyb=" Home of 1500 castle " ></Dash>
            <Ab aname="Royal" bname="FAMILY" cname="STILL" dname="LEADS" first={a} second={b} third={c}></Ab>
            </div>
        </div>
        
    )
}