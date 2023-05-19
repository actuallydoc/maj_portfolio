import React from 'react'
import Image from 'next/image';
type NavType = string;

const NavTabs: NavType[] = [
  "About",
  "Contact"
]

const NavEmail = "actuallydoc@gmail.com"

//Get the icon's

export default function Navbar() {
  return (
    <div className='flex text-black'>
      <div className='flex'>
        <div>
          <Image className='image' src={'/logo.png'} width={150} height={150} alt='test' />
        </div>
        <div className='flex space-x-10 content-center pt-6'>
          {NavTabs.map((value, index) => (
            <div className='text-2xl'>
              <a>{value}</a>
            </div>
          ))}

        </div>
      </div>
      {/* Icons part */}
      <div className=''>

      </div>
    </div>
  )
}
