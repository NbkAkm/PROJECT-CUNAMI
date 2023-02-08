import React from 'react'
import Menu from '../MenuComponent/MenuComponent'
import NavBar from '../NavBar/NavBar'

import './Header.scss'

function Header() {
  return (
    <div>
        <NavBar/>
        <Menu/>
    </div>
  )
}

export default Header