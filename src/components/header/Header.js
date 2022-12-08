import "./style.css"


function Header() {
    return (
        <>
            <header class="header" id="header">
                <div class="header__container">
                    <div class="header__inner">
                        <div class="header__logo">Vladimir Gutsalo</div>
                        <nav class="nav">
                            <a class="nav__link" href="#home">Главная</a>
                            <a class="nav__link" href="#about">Обо мне</a>
                            <a class="nav__link" href="#pоrtfolio">Портфолио</a>
                            <a class="nav__link" href="#price">Прайс</a>
                        </nav>
                    </div>
                </div>
            </header>

            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="menu__box">
                    <li><a class="menu__item" href="#home">Главная</a></li>
                    <li><a class="menu__item" href="#about">Обо мне</a></li>
                    <li><a class="menu__item" href="#pоrtfolio">Портфолио</a></li>
                    <li><a class="menu__item" href="#price">Прайс</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header