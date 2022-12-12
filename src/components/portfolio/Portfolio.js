import "./style.css";
import { NavLink } from "react-router-dom";






function Portfolio() {

    return (
        <div id="pоrtfolio" className="content">
            <div className="button">
                <NavLink to="/" className="btn">Свадьба</NavLink>
                <NavLink to="/lovestory" className="btn">Love story</NavLink>
                <NavLink to="/individual" className="btn">Индивидуальная</NavLink>
                <NavLink to="/commercial" className="btn">Коммерческие</NavLink>
            </div>
        </div>
    )
}

export default Portfolio