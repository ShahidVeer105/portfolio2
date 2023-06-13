
"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';

const Skills = () => {
    return (
        <div className=' bg-gradient-to-bl from-teal-400 to-amber-500 min-h-screen text-black'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-black">
                            About My Skills
                            <br className="hidden lg:inline-block" />
                            <br />
                            <Typewriter
                                options={{
                                    strings: ['Shahid Veer', 'Network Adminstrator', 'Student of PIAIC', 'Learning Web Development'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-black hover:text-white font-bold">
                            <span> I have Masters in Computer Sciences and MA med in Education and now I am learning WEB 3 Metawerse from PIAIC.</span> <br></br>
                            	Server Management (Active directory, Data sharing servers, Backup servers)<br></br>
                            	Installation and troubleshooting all gaming and development software’s (unity. Android studio, visual studio, adobe collection, Corral).<br></br>
                            	Configuration and maintenance of IP/Manual cameras.<br></br>
                            	Complete video, audio and photo editing using different tools like Photoshop, Edius and Filmora. <br></br>
                            	Administration of Office365/2013/2016/2019/2021. <br></br>
                            	Administration of Active Directory.<br></br>
                            	Troubleshoot experience of VMware.<br></br>
                            	Deployment of networks and servers <br></br>
                            	LAN.WAN devices monitoring<br></br>
                            	Bandwidth Monitoring of LAN, Wan Devices<br></br>
                            	Troubleshooting Network Connectivity Issues<br></br>
                            	System and network Upgrades - DHCP, DNS and FTP Troubleshooting <br></br>
                            	Providing complete service delivery to all users within the company related to IT Services. <br></br>
                            	Strong experience in Windows 2012/2016 <br></br> Enterprise environment (Active Directory Services e.g., Accounts, Groups, Group Policies, DNS, DHCP, and File & Print Servers <br></br>
                            	Handling and support for all IT infrastructure related requests within the company.<br></br>
                            	Manage Services by using different tools.

                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600 ">
                                <div className="ml-16 w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-red-600 mb-4 ">
                                    <Image src={require("../../../public/assets/node-js.png")} alt="spz" className='ml- rounded-full w-18' />
                                </div>
                                <h2 className="text-lg text-amber-400 hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600 ">
                                <div className="ml-16 w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-red-600 mb-4 ">
                                    <Image src={require("../../../public/assets/html (1).png")} alt="spz" className=' mt-1 w-14' />
                                </div>
                                <h2 className="text-lg text-amber-400 hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600 ">
                                <div className="ml-16 w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-red-600 mb-4">
                                    <Image src={require("../../../public/assets/typescript.png")} alt="spz" className='  w-12' />
                                </div>
                                <h2 className="text-lg text-amber-400 hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <Image src={require("../../../public/assets/tailwindcss.png")} alt="spz" className='  w-20' />
                                </div>
                                <h2 className="text-lg text-amber-400 hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg  bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <Image src={require("../../../public/assets/js.png")} alt="spz" className='ml- rounded-full w-16' />
                                </div>
                                <h2 className="text-lg text-amber-400 hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border-4 border-fuchsia-600 p-6 rounded-lg bg-black hover:bg-gradient-to-bl from-amber-400 to-teal-600">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <Image src={require("../../../public/assets/next js.jpeg")} alt="spz" className='  w-72 rounded-full' />
                                </div>
                                <h2 className="text-lg text-amber-400  hover:text-black font-medium title-font mb-2">
                                    Web 3 Metaverse
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Student of PIAIC Batch # 43
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 bg-black border-2 border-fuchsia-600 py-2 px-8 focus:outline-none hover:bg-green-400 hover:text-black rounded text-base  md:mt-6">

                        <a href="/" className='text-amber-400 hover:text-black'>Back to Home</a>
                    </button>
                    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button> */}
                </div>
            </section>

        </div>
    )
}

export default Skills