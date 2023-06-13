"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className='bg-gradient-to-bl from-teal-400 to-amber-500 min-h-screen text-black'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image src={require("../../../public/assets/spz1.jpg")}
                            className="transition.duration-500.transform hover:-translate-y-1  object-cover object-center rounded-lg"
                            alt="hero"
                            width={300}

                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-black">
                            Hello, I Am  
                            <br className="hidden lg:inline-block"/>
                            <Typewriter
                                options={{
                                    strings: ['Shahid Veer', 'Network Adminstrator','Student of PIAIC','Learning Web Development'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="mb-8 leading-relaxed text-black font-bold mt-5">
                        A passionate and skilled web designer based in Faisalabad, with a strong background in Information Technology.
                        </p>
                        <div className="flex justify-center text-amber-400">
                            <a href="https://www.linkedin.com/in/shahid-zeeshan-849163271/" target='blank'>
                        <button className="inline-flex items-center bg-black border-2 border-fuchsia-600 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-black rounded text-base mt-4 md:mt-0">
                        More Detail
                      
                    </button>
                    </a>      
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero