import React from 'react'
import './TopHeader.scss'
import '@fontsource/montserrat'
import '@fontsource/comfortaa'

import phone from './../../assets/icons/phone.svg'

function TopHeader() {
  return (
    <div className='top-header'>
       <div className="working-hours">
            <p>Работаем с 11:00 до 02:00</p>
       </div>
       
       <div className="contact-number">
            <img src={phone} alt="" />
            <p>0 702 774 744</p>
       </div>

    </div>
  )
}

export default TopHeader