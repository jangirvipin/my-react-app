import React from "react";
import "../CSSfiles/Pakistan.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="Pakistan, officially the Islamic Republic of Pakistan,is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre."
const b="Pakistan's constitution mandates free primary and secondary education, with public universities established in each province, including Punjab University, Sindh University, Peshawar University, Karachi University, and Balochistan University. The country's educational landscape have both public and private universities, fostering collaboration to enhance research"
const c="Pakistan's landscapes vary from coastal plains to glaciated mountains, offering deserts, forests, hills.Pakistan is divided into three major geographic areas: the northern highlands, the Indus River plain, and the Balochistan Plateau. The northern highlands feature the Karakoram, Hindu Kush, and Pamir mountain ranges, hosting some of the world's highest peaks."


export default function Pak(){
    return (
        <div className="Pakistan">
            <div className="PakistanA">
            <Dash name="Pakistan" ranking="46th GDP Ranking" state="Four provinces" time="GMT+5:00" property="Home of 108 peaks" propertyb="6th largest Force"></Dash>
            <Ab aname="Overwhelming" bname="" cname="Muslim" dname="Country" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}