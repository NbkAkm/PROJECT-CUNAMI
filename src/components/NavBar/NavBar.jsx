import React from 'react'
import './NavBar.scss'
import '@fontsource/comfortaa'

import logo from './../../assets/imgs/logo.svg'
import cart from './../../assets/icons/cart.svg'
import delivery from './../../assets/icons/delivery.svg'
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <div className='nav-bar'>
        <div className="logo">
            <img src={logo} alt="" />

            <div className='logo-text'>
                <p className='cunami'>CUNAMI SUSHI</p>
                <p className='food'>Japanese food</p>
            </div>
            
        </div>

        <div className="links">
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Меню
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            О нас
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="delivery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Доставка и оплата
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Контакты
          </Link>
          <Link
            className='nav-link nav-link-ltr'
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Отзывы
          </Link>
        </div>

        <div className="icons">
            <img src={cart} alt="" />
            <img src={delivery} alt="" />
        </div>

    </div>
  )
}

export default NavBar