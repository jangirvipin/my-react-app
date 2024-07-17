import React from "react";
import "../CSSfiles/North.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="North Korea, officially the Democratic People's Republic of Korea (DPRK),is a country in East Asia. It constitutes the northern half of the Korean Peninsula and borders China and Russia to the north at the Yalu (Amnok) and Tumen rivers, and South Korea to the south at the Korean Demilitarized Zone."
const b="Despite a historically strong Chinese influence, Korean culture has shaped its own unique identity. It came under attack during the Japanese rule from 1910 to 1945, when Japan enforced a cultural assimilation policy. Koreans were forced to learn and speak Japanese, adopt the Japanese family name system and Shinto religion, and were forbidden to write or speak the Korean language."
const c="North Korea occupies the northern portion of the Korean Peninsula, lying between latitudes 37° and 43°N, and longitudes 124° and 131°E. It covers an area of 120,540 square kilometers (46,541 sq mi). To its west are the Yellow Sea and Korea Bay, and to its east lies Japan across the Sea of Japan."

export default function North(){
    return (
        <div className="North">
            <div className="NorthA">
            <Dash name="NorthKorea" ranking="Under 150 " time="GMT+9:00" state="9 Provinces " property="Single Party state" propertyb=" Isolated country"></Dash>
            <Ab aname="Sign" bname="Of" cname="power" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}