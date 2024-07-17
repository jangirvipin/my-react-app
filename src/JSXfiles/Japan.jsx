import React from "react";
import Dash from "./Dashboard.jsx";
import Ab from "./About.jsx"
import "../CSSfiles/Japan.css"
const a ="Japan is an island country in East Asia, located in the Pacific Ocean off the northeast coast of the Asian mainland. It is bordered on the west by the Sea of Japan and extends from the Sea of Okhotsk in the north to the East China Sea in the south. The Japanese archipelago consists of four major islands—Hokkaido, Honshu, Shikoku, and Kyushu."
const b="Japan has the world's fourth-largest economy by nominal GDP, after that of the United States, China and Germany; and the fourth-largest economy by PPP.As of 2021, Japan's labor force is the world's eighth-largest, consisting of over 68.6 million workers. As of 2022, Japan has a low unemployment rate of around 2.6%."
const c="Once considered the strongest in the world, the Japanese consumer electronics industry is in a state of decline as regional competition arises in neighboring East Asian countries such as South Korea and China.[204] However, Japan's video game sector remains a major industry. In 2014, Japan's consumer video game market grossed $9.6 billion."

export default function Japan(){

    return(
        <div className="Japan">
            <div className="JapanA">
                <Dash name="Japan" ranking="4th GDP Ranking" time="GMT -7:00" state="9 regions" property="Birth of karaoke" propertyb="Known pop culture"></Dash>
                <Ab aname="Today's" bname="Enemy" cname="Tomorrow" dname="friend"  first={a} second={b} third={c}></Ab>
            </div>

        </div>
    )
}