import React from 'react'
import SocialMediaButton from './SocialMediaButton'

function Footer() {
  return (
    <div className='p-14 flex w-full h-72 bg-gradient-to-r from-tertiary to-primary justify-between text-white'>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='text-[48px] font-semibold'>
            SMKN 10 Bandung
          </div>
          <div className='text-[16px] font-extralight'>
            Jl. Cijawura Hilir No.339 40286 Bandung Jawa Barat
          </div>
        </div>
        <div>
          <table>
            <tr>
              <td className='font-semibold'>Phone </td>
              <td className='font-semibold'>:</td>
              <td className='font-light  ps-2'>0821-3218-32 (0812)</td>
            </tr>
            <tr>
              <td className='font-semibold'>Email</td>
              <td className='font-semibold'>:</td>
              <td className='font-light ps-2'>SMKNBandung@gmail.com</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-6 items-center'>
          <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/"} />
          <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/"} />
          <SocialMediaButton logo={"FaFacebookF"} link={"https://www.facebook.com/"} />
          <div></div>
          <SocialMediaButton logo={"FaTwitter"} link={"https://www.twitter.com/"} />
          <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/"} />
      </div>
    </div>
  )
}

export default Footer