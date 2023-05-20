import React from 'react'
import TechIcons from './TechIcons'
import Image from 'next/image'

export default function Introduction() {
    const handleGithubClick = () => {

        window.open('https://github.com/actuallydoc');

    }
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
                        <div onClick={handleGithubClick} className='button-github space-x-5'>
                            <div>
                                <p>My Github</p>
                            </div>
                            <div>
                                <Image src={'/github.svg'} width={30} height={30} alt='github icon' />
                            </div>

                        </div>
                    </div>
                    <div className='hire-me-text'>
                        <p>Im currently looking for a job & mentorship in the summer</p>
                    </div>
                </div>
                <div>


                </div>
            </div>
        </div >
    )
}
