import React from "react";
import "../CSSfiles/England.css"
import Dash from "./Dashboard.jsx";
import Ab from "./About.jsx" 
const a="Switzerland, officially the Swiss Confederation. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east. Switzerland is geographically divided among the Swiss Plateau, the Alps and the Jura; the Alps occupy the greater part of the territory, whereas most of the country's population of 9 million are concentrated on the plateau."
const b="Switzerland has a stable, prosperous and high-tech economy. It is the world's wealthiest country per capita in multiple rankings. The country ranks as one of the least corrupt countries in the world,[125][126][127] while its banking sector is rated as one of the most corrupt in the world. It has the world's twentieth largest economy by nominal GDP. "
const c="Swiss culture is characterised by diversity, which is reflected in diverse traditional customs.[235] A region may be in some ways culturally connected to the neighbouring country that shares its language, all rooted in western European culture.[236] The linguistically isolated Romansh culture in Graubünden in eastern Switzerland constitutes an exception. "

export default function Switzer (){
    return (
        <div className="Swit">
            <div className="SwitA">
            <Dash name="Switzerland" ranking="20th GDP Ranking" time="GMT+2:00" state=" 26 Cantons" property="Alpine Scenery" propertyb="2nd Safest Country"></Dash>
            <Ab aname="Heart" bname="of" cname="Europe" dname="" first={a} second={b} third={c}></Ab>
             </div>
        </div>
    )
}