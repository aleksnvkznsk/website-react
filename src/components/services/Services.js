import f1 from "./../../img/services/1.jpg"
import f2 from "./../../img/services/2.jpg"

import "./style.css"


function Services (){
    return(
        <div className="services">
    <h1 className="h1">Дополнительные услуги</h1>
    <div className="services-menu">

        <div className="services-block">
            <div className="services-img"><img className="services-jpg" src={f1}/></div>
            <div className="services-info">
                <div className="services-header">ПЕЧАТЬ НА ХОЛСТАХ И ИЗГОТОВЛЕНИЕ АРТ ПОРТРЕТОВ</div>
                <div className="services-text">Холст – это плотный материал с фактурной поверхностью, имитирующей
                    художественное
                    полотно.
                    Именно поэтому изображение, которое Вы печатаете на холсте, получается похожим на настоящую картину.
                    Печать
                    на холсте всегда тёплый и приятный подарок близким.
                    В стоимость входит печать, натяжка на подрамник, комплектация крепежом (сразу можно повесить на
                    стену).
                    Арт портреты отлично подходят для веселых и жизнерадостных людей. Основное отличие данного стиля это
                    великолепное сочетание клякс и брызг разных оттенков в хаотичном нанесении на холст.</div>
            </div>
        </div>

        <div className="services-block">
            <div className="services-img"><img className="services-jpg" src={f2}/></div>
            <div className="services-info">
                <div className="services-header">ФОТОКНИГА</div>
                <div className="services-text">Не просто фотокнига, а ваша первая семейная реликвия! Поможет возвращаться в
                    памятный день снова и снова. Это книга, которую через много лет вы с удовольствием откроете,
                    посмотрите и вспомните о вашем событии. Напечатанная фотография никогда не сравнится с цифровой по
                    тем магическим ощущениям при просмотре.</div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Services