import "./style.css"


import l1 from "../img/portfolio/lovestory/1.jpg"
import l2 from "../img/portfolio/lovestory/2.jpg"

function Lovestory() {
    return (
        <div className="lovestory">
            <img className="photo" src={l1} alt="" />
            <img className="photo" src={l2} alt="" />
        </div>
    )
}

export default Lovestory