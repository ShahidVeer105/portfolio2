"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';

const Contact = () => {
    return (
        <div className='bg-gradient-to-bl from-teal-400 to-amber-500 min-h-screen text-black'>
            <a className='flex auto px-8 py-6 text-3xl font-serif'>
                <Typewriter
                    options={{
                        strings: ['For Any Query Please Contact Us @ Given Detail', ' After Your Feed Back We Will Contact You Soon'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </a>
            <div> <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 border-fuchsia-600 border-4 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27216.032083359263!2d73.2525120774672!3d31.496573586594394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226e035f67f90d%3A0xa4d3c7d11054e1be!2sKhurianwala%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686381892766!5m2!1sen!2s"
                            style={{ filter: " contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="bg-black border-fuchsia-600 border-4 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-amber-400 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="text-indigo-500 mt-1">
                                    Dist. Faisalabad Teh. Jaranwala City Faisalabad
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-amber-400 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-500 leading-relaxed">shahidveer105@gmail.com</a>
                                <h2 className="title-font font-semibold text-amber-400 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className=" text-indigo-500 leading-relaxed">0092 322 7988283</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-200 border-fuchsia-600 border-4  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className=" px-2 mb-1 title-font font-bold text-xl text-black">
                            Feedback
                        </h2>
                        <p className=" px-2 leading-relaxed mb-5 text-gray-600">
                            Please fill up the required fields and send.
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="px-2 leading-7 text-xl text-black">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full  bg-white rounded  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="px-2 leading-7 text-xl text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full  bg-white  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="px-2 leading-7 text-xl text-black">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white mr-6 ml-6 my-2 py-2 bg-black border-4 focus:outline-none  rounded text-lg border-fuchsia-600  hover:bg-green-400 hover:text-black ">
                        Send Message
                        </button>
                      
                    </div>
                </div>
            </section>

            </div>
        </div>
    )
}

export default Contact