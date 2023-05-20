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

//Handle scrolling to the about me section (really cool. never did that before xd.)
const handleScroll = () => {
  const section = document.getElementById('aboutme');
  section?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='flex text-black'>
        <div className='flex'>
          <div>
            <Image className='image' src={'/logo.png'} width={150} height={150} alt='test' />
          </div>
          <div className='flex grid-cols-2 w-auto nav-text space-x-20 content-center pt-6 bg'>
            {NavTabs.map((value, index) => (
              <div key={index} className='text-2xl hover:translate-x-5 duration-150 cursor-pointer'>
                <a onClick={handleScroll} className='p-2'>{value}</a>
              </div>
            ))}
          </div>
        </div>
        {/* Icons part */}
        <div className='flex ml-auto justify center content-center items-center'>
          <div className='text-[21px] text-[#393939] email-font'>
            <a href='mailto:actuallydoc@gmail.com'>{NavEmail}</a>
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
