import React, { useState } from 'react'
import logo_sma from '../assets/Logo-SMK-10-Bandung.png'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import LargeScreenNavLink from './LargeScreenNavLink'
import SmallScreenNavLink from './SmallScreenNavLink'
import DropdownNavLink from './DropdownNavLink'
import { PembelajaranData, PrestasiData, ProfilData, jurusanData } from '../data/NavSubItem'

function Nav() {
  const [click, setClick] = useState(false)

  const handleClickLink = () => {
    setClick(false)
  }

  const content = (
    <div className='xl:hidden block absolute w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-xl'>
        <SmallScreenNavLink title="Home" endpoint="/" handleClick={handleClickLink}/>
        <SmallScreenNavLink title="Profil" handleClick={handleClickLink} subMenu={ProfilData}/>
        <SmallScreenNavLink title="Pembelajaran"  handleClick={handleClickLink} subMenu={PembelajaranData}/>
        <SmallScreenNavLink title="Jurusan" handleClick={handleClickLink} subMenu={jurusanData}/>
        <SmallScreenNavLink title="Prestasi" handleClick={handleClickLink} subMenu={PrestasiData}/>
        <SmallScreenNavLink title="Blog" endpoint="/blog" handleClick={handleClickLink}/>
        <SmallScreenNavLink title="Hubungi Kami" endpoint="/contact-us" handleClick={handleClickLink}/>
      </ul>
    </div>
  )

  return (
    <nav className=''>
      <div className='sticky top-0'>
        <div className='h-10vh flex justify-between z-50 border-b border-grey bg-white text-black  px-20 py-4'>
          <div className='flex items-center flex-1 cursor-default'>
            <img className='size-16' src={logo_sma} alt='SMK 10 Bandung Logo' />
            <div className='ms-5 text-[24px] font-semibold'>
              SMKN 10 Bandung
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='hidden xl:inline-block'>
              <ul className='flex gap-8 text-[18px] font-medium'>
                <LargeScreenNavLink title="Home" endpoint="/"/>
                <DropdownNavLink title="Profil" subMenu={ProfilData}/>
                <DropdownNavLink title="Pembelajaran" subMenu={PembelajaranData}/>
                <DropdownNavLink title="Jurusan" subMenu={jurusanData}/>
                <DropdownNavLink title="Prestasi" subMenu={PrestasiData}/>
                <LargeScreenNavLink title="Blog" endpoint="/blog"/>
                <LargeScreenNavLink title="Hubungi Kami" endpoint="/contact-us"/>
              </ul>
            </div>
          </div>
          <button className='block xl:hidden transisition scale-150' onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      <div>
        {click && content}
      </div>
    </nav>
  )
}

export default Nav;