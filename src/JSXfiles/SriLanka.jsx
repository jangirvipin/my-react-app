import React from "react";
import "../CSSfiles/SriLanka.css"
import Dash from "./Dashboard.jsx"
import Ab from './About.jsx'
const a="Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait. It shares a maritime border with the Maldives in the southwest and India in the northwest."
const b="Sri Lanka has 103 rivers. The longest of these is the Mahaweli River, extending 335 kilometres (208 mi). These waterways give rise to 51 natural waterfalls of 10 metres (33 ft) or more. The highest is Bambarakanda Falls, with a height of 263 metres (863 ft). Sri Lanka's coastline is 1,585 km (985 mi) long. Sri Lanka claims an exclusive economic zone extending 200 nautical miles."
const c="The culture of Sri Lanka is influenced primarily by Buddhism and Hinduism. Sri Lanka is the home to two main traditional cultures: the Sinhalese (centred in Kandy and Anuradhapura) and the Tamil (centred in Jaffna). Tamils co-existed with the Sinhalese people since then, and the early mixing rendered the two ethnic groups almost physically indistinguishable."

export default function Sri(){
    return(
        <div className="Sri">
            <div className="SriA">
            <Dash name="SriLanka" ranking="Under 100 Ranking" time="GMT+6:00" state="25 States" property="Island Country" propertyb=" Spiritually Rich"></Dash>
            <Ab aname="Island" bname="that" cname="Everyone" dname="loves" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}