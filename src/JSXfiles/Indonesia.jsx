import React from "react";
import Dash from "./Dashboard.jsx"
import "../CSSfiles/Indo.css"
import Ab from "./About.jsx";
const a="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles)."
const b="Indonesia has a mixed economy in which the private sector and government play vital roles.[172] As the only G20 member state in Southeast Asia,[173] the country has the largest economy in the region and is classified as a newly industrialised country. Per a 2023 estimate, it is the world's 16th largest economy by nominal GDP and 7th in terms of GDP at PPP, estimated to be US$1.417 trillion."
const c="Tourism contributed around US$9.8 billion to GDP in 2020, and in the previous year, Indonesia received 15.4 million visitors.[215] Overall, China, Singapore, Malaysia, Australia, and Japan are the top five sources of visitors to Indonesia.[216] Since 2011, Wonderful Indonesia has been the country's international marketing campaign slogan to promote tourism."

export default function Indo(){
    return(
        <div className="Indo">
            <div className="IndoA">
                <Dash name="Indonesia" ranking="16th GDP ranking" time="GMT+7:00" state="38 Provinces" property="Diverse Tourism" propertyb="Archipelagic State"></Dash>
                <Ab aname="Country" bname="where" cname="Adventure" dname="awaits" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}