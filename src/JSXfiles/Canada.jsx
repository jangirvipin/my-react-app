import React from "react";
import "../CSSfiles/Canada.css"
import Dash from "./Dashboard.jsx"
import Ab from "./About.jsx"
const a="Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline. Its border with the United States is the world's longest international land border."
const b="Canada has a highly developed mixed-market economy, with the world's ninth-largest economy as of 2023, and a nominal GDP of approximately US$2.221 trillion. It is one of the world's largest trading nations, with a highly globalized economy. In 2021, Canadian trade in goods and services reached $2.016 trillion."
const c="Education in Canada is for the most part provided publicly, funded and overseen by federal, provincial, and local governments. Education is within provincial jurisdiction and a province's curriculum is overseen by its government. Education in Canada is generally divided into primary education, followed by secondary and post-secondary education. "

export default function Canada(){
    return (
        <div className="Canada">
            <div className="CanadaA">
            <Dash name="Canada" ranking="10th GDP Ranking" time="GMT-4:00" state="Ten provinces" property="Quality Life Index" propertyb="2nd Largest Country"></Dash>
            <Ab aname="World" bname="Needs" cname="More" dname="Canada" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}