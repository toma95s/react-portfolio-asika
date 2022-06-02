import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/asikanewaz/" target="_blank" rel="noreferrer"><BsLinkedin/></a> 
        <a href="https://github.com/toma95s?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
  )
}

export default HeaderSocials