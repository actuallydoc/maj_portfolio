import React from 'react'
import Image from 'next/image';
import NavSpacer from '../spacer/NavSpacer';
import NavIcons from './NavIcons';
type NavType = string;

const NavTabs: NavType[] = [
  "About",
  "Contact"
]

const NavEmail = "actuallydoc@gmail.com"

//Get the icon's

export default function Navbar() {
  return (
    <div className=''>
      <div className='flex text-black'>
        <div className='flex'>
          <div>
            <Image className='image' src={'/logo.png'} width={150} height={150} alt='test' />
          </div>
          <div className='flex grid-cols-4 nav-text space-x-10 content-center pt-6'>
            {NavTabs.map((value, index) => (
              <div key={index} className='text-2xl'>
                <a>{value}</a>
              </div>
            ))}

          </div>
        </div>
        {/* Icons part */}
        <div className='flex ml-auto justify center content-center items-center'>
          <div className='text-[21px] text-[#393939] email-font'>
            <a>{NavEmail}</a>
          </div>
          <div className='mr-3'>
            <NavIcons />
          </div>
        </div>
      </div>
      <div>
        <NavSpacer />
      </div>
    </div>
  )
}
