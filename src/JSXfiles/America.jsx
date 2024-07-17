import React from "react";
import "../CSSfiles/America.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"

const a="The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America. It is a federation of 50 states, which also includes its federal capital district of Washington, D.C., and 326 Indian reservations.The 48 contiguous states border Canada to the north and Mexico to the south."
const b="The United States is the world's third-largest country by total area behind Russia and Canada. The 48 contiguous states and the District of Columbia occupy a combined area of 3,119,885 square miles (8,080,470 km2). The coastal plain of the Atlantic seaboard gives way to inland forests and rolling hills in the Piedmont plateau region."
const c="The U.S. has been the world's largest economy nominally since about 1890.The 2023 nominal U.S. gross domestic product (GDP) of more than $27 trillion was the highest in the world, . From 1983 to 2008, U.S. real compounded annual GDP growth was 3.3%, compared to a 2.3% weighted average for the rest of the Group of Seven."

export default function America(){
    return (
        <div className="America">
              <div className="AmericaA">
            <Dash name="America" ranking="1st GDP Ranking" time="GMT-4:00" state="50 states" property="2nd Largest by PPP" propertyb="3rd Largest Army"></Dash>
            <Ab aname="ONE" bname="FLAG" cname="ONE" dname="LAND" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}