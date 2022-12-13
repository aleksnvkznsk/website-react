import "./style.css"

import w1 from "../img/portfolio/wedding/1.jpg"
import w2 from "../img/portfolio/wedding/2.jpg"
import w3 from "../img/portfolio/wedding/3.jpg"
import w4 from "../img/portfolio/wedding/4.jpg"
import w5 from "../img/portfolio/wedding/5.jpg"
import w6 from "../img/portfolio/wedding/6.jpg"
import w7 from "../img/portfolio/wedding/7.jpg"
import w8 from "../img/portfolio/wedding/8.jpg"
import w9 from "../img/portfolio/wedding/9.jpg"
import w10 from "../img/portfolio/wedding/10.jpg"
import w11 from "../img/portfolio/wedding/11.jpg"
import w12 from "../img/portfolio/wedding/12.jpg"

function Wedding() {
    return (
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
    )
}

export default Wedding