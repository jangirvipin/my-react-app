import React from "react";
import Dash from './Dashboard.jsx'
import Ab from './About.jsx'
import "../CSSfiles/Russia.css"
const a="Russia, or the Russian Federation,is a country spanning Eastern Europe and North Asia. It is the largest country in the world by area, extending across eleven time zones and sharing land borders with fourteen countries.[d] It is the world's ninth-most populous country and Europe's most populous country. Russia is a highly urbanised country including 16 population centres . "
const b="Russia's vast landmass stretches over the easternmost part of Europe and the northernmost part of Asia.[226] It spans the northernmost edge of Eurasia; and has the world's fourth-longest coastline, of over 37,653 km (23,396 mi).Russia lies between latitudes 41° and 82° N, and longitudes 19° E and 169° W, extending some 9,000 km (5,600 mi) east to west."
const c="The Russian Armed Forces are divided into the Ground Forces, the Navy, and the Aerospace Forces—and there are also two independent arms of service: the Strategic Missile Troops and the Airborne Troops. As of 2021, the military have around a million active-duty personnel, which is the world's fifth-largest, and about 2–20 million reserve personnel."

export default function Rus(){
    return (
        <div className="Rus">
            <div className="RusA">
            <Dash name="Russia" ranking="8th GDP Ranking" time="GMT+3:00" property="Largest country" propertyb="Frozen Kingdom" state="83 Regions"></Dash>
            <Ab aname="Russia" bname ="Is " cname="An" dname="Empire" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}