import "./style.css";

import Lovestory from "../../portfolio_pages/Lovestory";
import Wedding from "../../portfolio_pages/Wedding";
import Individual from "../../portfolio_pages/Individual";
import Commercial from "../../portfolio_pages/Commercial";

import { useState } from "react";



function Portfolio() {

    const [category, setCategory] = useState("Wedding");

    return (
        <div id="pоrtfolio" className="content">
            <div className="button">
                <a className="btn" onClick={() => setCategory('wedding')}>Свадьба</a>
                <a className="btn" onClick={() => setCategory('lovestory')}>Lovestory</a>
                <a className="btn" onClick={() => setCategory('individual')}>Индивидуальная</a>
                <a className="btn" onClick={() => setCategory('commercial')}>Коммерческие</a>

                {category === 'wedding' && <div><Wedding /></div>}
                {category === 'lovestory' && <div><Lovestory /></div>}
                {category === 'individual' && <div><Individual /></div>}
                {category === 'commercial' && <div><Commercial /></div>}
            </div>

        </div>

    )
}

export default Portfolio

