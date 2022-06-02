import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Profiletransparent.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className= "container header__container">
        <h5>Welcome to </h5>
        <h1>Asika Habib's Portfolio</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
          </div>
      

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header