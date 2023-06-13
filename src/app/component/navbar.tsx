
"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='z-50 sticky top-0'>
            <header className="text-amber-400 bg-black body-font">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-green-400 mb-4 md:mb-0">
                        <Image src={require("../../../public/assets/spz.jpg")} alt="spz" className='ml-4 rounded-full w-6' />

                        <span className="ml-3 text-xl text-amber-400 ">Welcome to my Portfolio</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-bold justify-center  ">
                        <Link href="/" className="mr-5  hover:text-green-400 ">Home</Link>
                        <Link href=" about " className="mr-5 hover:text-green-400">About</Link>
                        <Link href=" skills " className="mr-5 hover:text-green-400">Skills</Link>
                        <Link href=" projects " className="mr-5 hover:text-green-400">Projects</Link>
                        <Link href=" contact " className="mr-5 hover:text-green-400">Contact</Link>

                    </nav>
                    <a href='/assets/spzcv.pdf'>
                        <button className="mr-6 inline-flex items-center bg-black border-2 border-fuchsia-600 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-black rounded text-base mt-4 md:mt-0">
                            Download CV
                            <AiOutlineCloudDownload className='text-lg ml-2' />
                        </button>
                    </a>
                </div>
            </header>
        </div>

    )
}

export default Navbar