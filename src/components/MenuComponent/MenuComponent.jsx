import React from 'react'
import './MenuComponent.scss'
import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
  return (
    <div className='menu'>
      <div className="nav-links">
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="sets"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Сеты
        </Link>
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="sushi"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Суши
        </Link>
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="rolls"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Роллы
        </Link>
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="combo"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Комбо
        </Link>
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="pizza"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Пицца
        </Link>
        <Link
          className='nav-link nav-link-ltr'
          activeClass="active"
          to="drinks"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Напитки
        </Link>
      </div>
        

    </div>
  )
}

export default Menu