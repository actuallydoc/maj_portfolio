import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className=''>
            <div className='flex'>
                <div className='footer-madeby'>
                    <a>Made by Maj with </a>
                </div>
                <div className='heart-emoji'>
                    <Image src={'/heart.svg'} width={20} alt='heart-emoji' height={30} />
                </div>

            </div>
            <div>
                <div className='made-with'>
                    <a>Designed with Figma, React, NextJS</a>
                </div>
            </div>
        </div>

    )
}
