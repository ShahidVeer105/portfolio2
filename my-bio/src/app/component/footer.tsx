"use client"
import React from 'react'
import Image from 'next/image'
import { IoLogoYoutube } from 'react-icons/Io'
import { AiFillFacebook } from 'react-icons/Ai'
import { AiFillTwitterSquare } from 'react-icons/Ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-black">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-amber-400">
                            <Image src={require("../../../public/assets/spz3.jpg")} alt="spz" className='w- rounded-lg w-8' />
                            <span className="ml-3 text-xl">My Social Media Contacts</span>
                        </a>
                        <>
                            <Link target="_blank"
                                href={"https://www.youtube.com/@infozonedotcom1754/videos"}
                                className='text-white hover:text-red-500'
                            >
                                <IoLogoYoutube className='mt-14 text-2xl' />
                            </Link>
                            <Link target="_blank"
                                href={"https://www.facebook.com/shahidveerg"}
                                className='text-white hover:text-blue-400'
                            >
                                <AiFillFacebook className='mx-14 flex text-2xl -mt-6 ' />
                            </Link>
                            <Link target="_blank"
                                href={"https://twitter.com/"}
                                className='text-white hover:text-blue-400'
                            >
                                <AiFillTwitterSquare className='mx-28 flex text-2xl -mt-6 ' />
                            </Link>
                        </>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font  font-bold text-amber-400 hover:text-white tracking-widest text-lg mb-3">
                                Profession
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">First Link</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Second Link</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Third Link</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-amber-400 hover:text-white tracking-widest text-lg mb-3">
                                AboutMe
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">First Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Second Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Third Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Fourth Inprocess</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-amber-400 hover:text-white tracking-widest text-lg mb-3">
                                Projects
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">First Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Second Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Third Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Fourth Inprocess</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-amber-400 hover:text-white tracking-widest text-lg mb-3">
                                Lattest Activities
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">First Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Second Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Third Inprocess</a>
                                </li>
                                <li>
                                    <a className=" text-amber-400 hover:text-green-400">Fourth Inprocess</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer