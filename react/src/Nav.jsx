import React, { useState } from 'react'
import logo_sma from './assets/Logo-SMK-10-Bandung.png'
import {FaTimes}  from 'react-icons/fa'
import {CiMenuFries} from  'react-icons/ci'
import { Link } from 'react-router-dom'

function Nav() {
  const [click, setClick] = useState(false)
  
  const content = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-xl mt-4'>
        <Link spy={true} smooth={true} to="/" onClick={() => setClick(false)}>
          <li className='py-5 border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="/contact-us" onClick={() => setClick(false)}>
          <li className='py-5 border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer'>Hubungi Kami</li>
        </Link>
      </ul>
    </div>
  )
  
  return (
    <nav className='sticky'>
      <div className='h-10vh flex justify-between z-50 border-b border-grey bg-white text-black py-2 px-20 lg:py-4'>
        <div className='flex items-center flex-1'>
          <span><img className='size-14 lg:size-16' src={logo_sma} alt='SMK 10 Bandung Logo' /></span>
        </div>
        <div className='flex items-center justify-end'>
          <div className='hidden lg:block'>
            <ul className='flex gap-8 mr-16 text-[18px] font-medium'>
              <Link spy={true} smooth={true} to="Home">
                <li className='hover:text-tertiary transition hover:border-b-2 hover:border-tertiary cursor-pointer'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="ContactUs">
                <li className='hover:text-tertiary transition hover:border-b-2 hover:border-tertiary cursor-pointer'>Hubungi Kami</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block lg:hidden transisition' onClick={() => setClick(!click)}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}

export default Nav;