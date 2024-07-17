import React from "react";
import "../CSSfiles/Afgan.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="Afghanistan,officially the Islamic Emirate of Afghanistan, is a landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia, it is bordered by Pakistan to the east and south, Iran to the west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan to the northeast, and China to the northeast and east. "
const b="At over 652,864 km2 (252,072 sq mi), Afghanistan is the world's 41st largest country, slightly bigger than France and smaller than Myanmar, and about the size of Texas in the United States. There is no coastline, as Afghanistan is landlocked. Afghanistan shares its longest land border (the Durand Line) with Pakistan to the east and south"
const c="Afghanistan's nominal GDP was $20.1 billion in 2020, or $81 billion by purchasing power parity (PPP). Its GDP per capita is $2,459 (PPP) and $611 by nominal. Despite having $1 trillion or more in mineral deposits, it remains one of the world's least developed countries. Afghanistan's rough physical geography and its landlocked status has been cited."

export default function Afgan(){
    return (
        <div className="Afgan">
            <div className="AfganA">
                <Dash name="Afganistan" ranking="Under 150" time="GMT+4:30" property="For oriental rugs" propertyb="Multiethnic country" state="34 Provinces"></Dash>
                <Ab aname="Dream" bname="of" cname="Afghan" dname="People" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}