import React from "react";
import "../CSSfiles/India.css"
import Dash from "./Dashboard";
import Ab from "./About";

const a ="India covers an area of 32,87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity"
const b="Lying entirely in the northern hemisphere, the mainland extends between latitudes 8° 4' and 37° 6' north, longitudes 68° 7' and 97° 25' east and measures about 3,214 km from north to south between the extreme latitudes and about 2,933 km from east to west between the extreme longitudes. It has a land frontier of about 15,200 km. The total length of the coastline of the mainland"
const c="India is one of the oldest civilizations in the world with a kaleidoscopic variety and rich cultural heritage. It has achieved all-round socio-economic progress since Independence. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity."


export default function India(){
    return(
        <div className="india">
            <div className="indiaA">
            <Dash ranking="5th GDP Ranking" time="GMT + 05:30" state="28" property="Largest Democracy" propertyb="Rich Cultural" name="India"  ></Dash>
            <Ab aname="MY" bname="INDIA" cname="MY" dname="PRIDE" first={a} second={b} third={c}></Ab>
            </div>
                
        </div>
    )
}