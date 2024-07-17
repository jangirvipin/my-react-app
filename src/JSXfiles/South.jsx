import React from "react";
import "../CSSfiles/South.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="South Korea, officially the Republic of Korea (ROK), is a country in East Asia. It constitutes the southern part of the Korean Peninsula and borders North Korea along the Korean Demilitarized Zone; though it also claims the land border with China and Russia. The country's western border is formed by the Yellow Sea"
const b="South Korea occupies the southern portion of the Korean Peninsula, which extends some 1,100 km (680 mi) from the Continental and East Asian mainland. This mountainous peninsula is flanked by the Yellow Sea to the west and the Sea of Japan to the east. Its southern tip lies on the Korea Strait and the East China Sea. "
const c="South Korea's mixed economy is the 13th largest GDP at nominal and the 14th largest GDP by purchasing power parity in the world, identifying it as one of the G20 major economies. It is a developed country with a high-income economy and is the most industrialized member country of the OECD. South Korean brands such as and Samsung are internationally famous"

export default function South(){
    return(
        <div className="South">
            <div className="SouthA">

            <Dash name="SouthKorea" ranking="14th GDP Ranking" time="GMT+9:00" state=" 9 Provinces " property="K-pop" propertyb="k-Drama" ></Dash>
            <Ab aname="The" bname="Land" cname="Of" dname="Kimchi" first={a} second={b} third={c}></Ab>

            </div>
        </div>
    )
}