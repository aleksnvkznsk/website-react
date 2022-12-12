import "./style.css"

import c1 from "../img/portfolio/commercial/1.jpg"
import c2 from "../img/portfolio/commercial/2.jpg"
import c4 from "../img/portfolio/commercial/4.jpg"
import c3 from "../img/portfolio/commercial/3.jpg"

function Commercial() {
    return (
            <div className="commercial">
                <img className="photo" src={c1} alt="" />
                <img className="photo" src={c2} alt="" />
                <img className="photo" src={c3} alt="" />
                <img className="photo" src={c4} alt="" />
            </div>
    )
}
export default Commercial