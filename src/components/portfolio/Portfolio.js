import "./style.css"

import w1 from "./../../img/portfolio/wedding/1.jpg"
import w2 from "./../../img/portfolio/wedding/2.jpg"
import w3 from "./../../img/portfolio/wedding/3.jpg"
import w4 from "./../../img/portfolio/wedding/4.jpg"
import w5 from "./../../img/portfolio/wedding/5.jpg"
import w6 from "./../../img/portfolio/wedding/6.jpg"
import w7 from "./../../img/portfolio/wedding/7.jpg"
import w8 from "./../../img/portfolio/wedding/8.jpg"
import w9 from "./../../img/portfolio/wedding/9.jpg"
import w10 from "./../../img/portfolio/wedding/10.jpg"
import w11 from "./../../img/portfolio/wedding/11.jpg"
import w12 from "./../../img/portfolio/wedding/12.jpg"

import l1 from "./../../img/portfolio/lovestory/1.jpg"
import l2 from "./../../img/portfolio/lovestory/2.jpg"

import i1 from "./../../img/portfolio/individual/1.jpg"
import i2 from "./../../img/portfolio/individual/2.jpg"
import i3 from "./../../img/portfolio/individual/3.jpg"
import i4 from "./../../img/portfolio/individual/4.jpg"

import c1 from "./../../img/portfolio/commercial/1.jpg"
import c2 from "./../../img/portfolio/commercial/2.jpg"
import c3 from "./../../img/portfolio/commercial/3.jpg"
import c4 from "./../../img/portfolio/commercial/4.jpg"

function Portfolio() {
    return (
        <div id="pоrtfolio" className="content">
            <div className="button">
                <button className="btn" onclick="div1()">Свадьба</button>
                <button className="btn" onclick="div2()">Love story</button>
                <button className="btn" onclick="div3()">Индивидуальная</button>
                <button className="btn" onclick="div4()">Коммерческие</button>
            </div>

            <div className="wedding">
                <img className="photo" src={w5} alt="" />
                <img className="photo" src={w7} alt="" />
                <img className="photo" src={w8} alt="" />
                <img className="photo" src={w9} alt="" />
                <img className="photo" src={w10} alt="" />
                <img className="photo" src={w11} alt="" />
                <img className="photo" src={w12} alt="" />
                <img className="photo" src={w1} alt="" />
                <img className="photo" src={w2} alt="" />
                <img className="photo" src={w3} alt="" />
                <img className="photo" src={w4} alt="" />
                <img className="photo" src={w6} alt="" />
            </div>

            <div className="lovestory">
                <img className="photo" src={l1} alt="" />
                <img className="photo" src={l2} alt="" />
            </div>

            <div className="individual">
                <img className="photo" src={i1} alt="" />
                <img className="photo" src={i2} alt="" />
                <img className="photo" src={i3} alt="" />
                <img className="photo" src={i4} alt="" />
            </div>

            <div className="commercial">
                <img className="photo" src={c1} alt="" />
                <img className="photo" src={c2} alt="" />
                <img className="photo" src={c3} alt="" />
                <img className="photo" src={c4} alt="" />
            </div>
        </div>
    )
}

export default Portfolio