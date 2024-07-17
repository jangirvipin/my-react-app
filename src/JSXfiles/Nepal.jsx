import React from "react";
import "../CSSfiles/Nepal.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="Nepal,[a] officially the Federal Democratic Republic of Nepal,[b] is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain. It borders the Tibet Autonomous Region of China to the north, and India to the south, east, and west, while it is narrowly separated from Bangladesh."
const b="Nepal is of roughly trapezoidal shape, about 800 kilometres (500 mi) long and 200 kilometres (120 mi) wide, with an area of 147,516 km2 (56,956 sq mi). It lies between latitudes 26° and 31°N, and longitudes 80° and 89°E. Nepal's defining geological processes began 75 million years ago when the Indian plate, then part of the southern supercontinent Gondwana."
const c="Traditional Nepali society is sometimes defined by social hierarchy. The Nepali caste system embodies much of the social stratification and many of the social restrictions found in South Asia. Social classes are defined by more than a hundred endogamous hereditary groups, often termed as jātis, or castes. Nepal declared untouchability to be illegal in 1963"

export default function Nepal(){
    return (
        <div className="Nepal">
            <div className="NepalA">
            <Dash name="Nepal" ranking="Under 100" time="GMT+5:45" state="7 states" property="Unique Flag" propertyb="Mount Everest"></Dash>
            <Ab aname="Home" bname="of" cname="Mount" dname="Everest" first={a} second={b} third={c}></Ab>
            
            </div>
        </div>
    )
}