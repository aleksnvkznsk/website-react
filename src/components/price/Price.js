import "./style.css"


import f1 from "./../../img/price/1.jpg"
import f2 from "./../../img/price/2.jpg"
import f3 from "./../../img/price/3.jpg"
import f4 from "./../../img/price/4.jpg"

function Price() {
    return (
        <div className="price">
            <h1 id="price" className="h1">Стоимость свадебной фотосъемки</h1>
            <div className="price-block">

                <div className="column">
                    <div className="price-img">
                        <img className="price-jpg" src={f1}/>
                    </div>
                    <div className="invisible"><img className="price-jpg" src={f1} /></div>
                    <div className="pricetag">
                        <p className="price-header">Пакет MINI</p>
                        <div className="price-text">
                            <ul>
                                <li>встреча и консультация;</li>
                                <li>фотосъемка 5 часов;</li>
                                <li>цветокоррекция около 100 - 200 фото;</li>
                                <li>художественная ретушь около 10-15 фото;</li>
                                <li>все фото записываются на Электронный носитель;</li>
                                <li> все фотографии вы получите электронным вариантом, где сможете скачать все
                                    фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                <li className="price-text">печать 5 фото (10x15).</li>
                            </ul>
                        </div>
                        <h2 className="price-money">12 500 руб</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="invisible"><img className="price-jpg" src={f2} /></div>
                    <div className="pricetag">
                        <p className="price-header">Пакет STANDART</p>
                        <div className="price-text">
                            <ul>
                                <li>встреча и консультация;</li>
                                <li>фотосъемка 7 часов;</li>
                                <li>цветокоррекция около 200 - 300 фото;</li>
                                <li>художественная ретушь около 15 - 20 фото;</li>
                                <li>все фото записываются на Электронный носитель;</li>
                                <li>все фотографии вы получите электронным вариантом, где сможете скачать все
                                    фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                <li>печать 10 фото (10x15).</li>
                            </ul>
                        </div>
                        <h2 className="price-money">17 500 руб</h2>
                    </div>
                    <div className="price-img">
                        <img className="price-jpg" src={f2} />
                    </div>
                </div>
                <div className="column">
                    <div className="price-img"><img className="price-jpg" src={f3} /></div>
                    <div className="invisible"><img className="price-jpg" src={f3} /></div>
                    <div className="pricetag">
                        <p className="price-header">Пакет MAXI</p>
                        <div className="price-text">
                            <ul>
                                <li>встреча и консультация;</li>
                                <li>фотосъемка 9 часов;</li>
                                <li>цветокоррекция около 300 - 400 фото;</li>
                                <li>художественная ретушь 25 - 30 фото;</li>
                                <li>все фото записываются на Электронный носитель;</li>
                                <li>все фотографии вы получите электронным вариантом, где сможете скачать все
                                    фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                <li>скидка на Love Story;</li>
                                <li>печать 10 фото (10x15).</li>
                            </ul>
                        </div>
                        <h2 className="price-money">22 500 руб</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="invisible"><img className="price-jpg" src={f4} /></div>
                    <div className="pricetag">
                        <p className="price-header">Пакет Полный день</p>
                        <div className="price-text">
                            <ul>
                                <li>встреча и консультация;</li>
                                <li>работа от сборов до конца банкета;</li>
                                <li>цветокоррекция около 400 - 600 фото;</li>
                                <li>художественная ретушь 35 - 40 фото;</li>
                                <li>все фото записываются на Электронный носитель;</li>
                                <li>все фотографии вы получите электронным вариантом, где сможете скачать все
                                    фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                <li>скидка на Love Story;</li>
                                <li>помощь в составлении тайминга свадебного дня;</li>
                                <li>печать 15 фото (10x15).</li>
                            </ul>
                        </div>
                        <h2 className="price-money">30 000 руб</h2>
                    </div>
                    <div className="price-img">
                        <img className="price-jpg" src={f4} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Price