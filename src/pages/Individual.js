import "./style.css"

import i1 from "../img/portfolio/individual/1.jpg"
import i2 from "../img/portfolio/individual/2.jpg"
import i3 from "../img/portfolio/individual/3.jpg"
import i4 from "../img/portfolio/individual/4.jpg"

function Individual() {
    return (
        <div className="individual">
            <img className="photo" src={i1} alt="" />
            <img className="photo" src={i2} alt="" />
            <img className="photo" src={i3} alt="" />
            <img className="photo" src={i4} alt="" />
        </div>
    )
}

export default Individual