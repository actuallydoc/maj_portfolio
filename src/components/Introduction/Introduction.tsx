import React from 'react'
import TechIcons from './TechIcons'

export default function Introduction() {
    return (
        <div>
            <div className='flex'>
                <div className='flex-col'>
                    <div className='introduction-text'>
                        Hey there, i’m Maj
                    </div>
                    <div className=''>
                        <div className='my-specialty'>
                            Self Taught Full Stack Web Developer

                        </div>
                        <div className='bottom_part'>
                            & Coding Enthusiast
                        </div>
                        <div className='about-me'>
                            Passionate self-taught developer dedicated to continuous learning and delivering exceptional work. I thrive on challenges, collaborate effectively,
                            and make a positive impact through my dedication to coding.
                        </div>
                    </div>
                    <div className=''>
                        <TechIcons />
                    </div>
                    <div>
                    </div>
                </div>
                <div>


                </div>
            </div>
        </div>
    )
}
