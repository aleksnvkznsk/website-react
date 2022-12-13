import vk from "./../../img/iso/Vk.ico"
import telegram from "./../../img/iso/telegram.ico"
import whatsapp from "./../../img/iso/whatsapp.ico"

import "./style.css"


function Intro (){
    return(
        <div id="home" className="intro">
        <div className="intro__information">
            <p className="intro__text">Владимир Гуцало фотограф Новокузнецк</p>
            <div className="intro__links">
                <div className="intro__src">
                    <a href="https://t.me/vovagutsalo" target="blank"><img className="intro__src__img"
                            src={telegram}/></a>
                    <a href="https://vk.com/publicphotogutsalo" target="blank"><img className="intro__src__img"
                            src={vk}/></a>
                    <a href="https://wa.me/89133352108" target=" blank"><img className="intro__src__img"
                            src={whatsapp}/></a>
                </div>
                <div className="intro__phone">
                    <p className="intro__room">+7 (913) 335 21 08</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Intro