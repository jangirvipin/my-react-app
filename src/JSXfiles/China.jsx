import React from "react";
import Dash from "./Dashboard";
import Ab from "./About";
import "../CSSfiles/China.css";
const a="With a population of 1.4 billion, China has more people than any other country on Earth except India. About a third of the population lives in cities. The rest of the people live in the country Arts and crafts have a long history in China. Thousands of years ago the Chinese were some of the first people to use silk, jade, bronze, wood, and paper to make art"
const b="China's diverse habitats are home to hundreds of species of animals and plants. More than 3,800 species of fish and hundreds of amphibians and reptile species live in the rivers, lakes, and coastal waters.China's forest wildlife is threatened by logging and clear-cutting (clearing the land of all trees) for farmland. Expanding deserts in the north also shrink animal habitats"
const c="China is the home of one of the world's oldest civilizations, but it has only recently become a moder nation In the last 20 years, China has changed faster than any other country in the world.Ancient China was a land of invention. For centuries, China was way ahead of most other countries in science and technology, astronomy, and math. "
export default function Chin(){
    return (
        <div className="China">
            <div className="ChinaA">
            <Dash name="China" ranking="2nd GDP Ranking" time="GMT-7:00" state="0 states" property="Great wall of China" propertyb="1st Largest by PPP"></Dash>
            <Ab aname="My" bname="calligraphy" cname="is" dname="Art" first={a} second={b} third={c}></Ab>
            </div>
        </div>
    )
}