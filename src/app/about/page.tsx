"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-gradient-to-bl from-teal-400 to-amber-500 min-h-screen text-black'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold title-font text-black mb-12 text-center">
            Let Me Introduce More About Myself
            <br className="hidden lg:inline-block" />
            <br />
            <Typewriter
              options={{
                strings: ['My Full Name is Shahid Pervez Zeeshan', 'Network Adminstrator', 'Student of PIAIC', 'Learning Web Development'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='flex items-center justify-center'>
                        <Image src={require("../../../public/assets/spz.jpg")}
                            className="transition.duration-500.transform hover:-translate-y-1  object-cover object-center rounded-full"
                            alt="hero"
                            width={200}

                        />
                    </div>
          <h2 className='flex-auto mt-20 ml-16 ttext-center text-black text-2xl  font-bold hover:text-white '>
            2008-2011<br />
            MA EDUCATION (DNFE),        ALLAMA IQBAL OPEN UNIVERSITY. <br />
            2003-2005<br />
            MCS,      NYCON COLLEGE OF COMPUTER SCIENCES. <br />
            2002-2003 <br />
            PGD,  POST GRADUATE DIPLOMA IN COMPUTER SCIENCE. ALLAMA IQBAL OPEN UNIVERSITY.  <br />
            MAY 2000<br />
            DWA,  DIPLOMA IN WIDOWS APPLICATION.    GOVT. DIGREE COLLEGE JARANWALA.<br />
            1999-2002<br />
            BA,   UNIVERSITY OF THE PUNJAB LAHORE.<br />
            1997-1999<br />
            FA,   BOARD OF INTERMEDIATE AND SECONDARY EDUCATION FAISALABAD.<br />
            1995-1997<br />
            MATRICULATION IN SCIENCE,
            BOARD OF INTERMEDIATE AND SECONDARY EDUCATION FAISALABAD.<br />

          </h2>

        </div>
      </section>

    </div>


  )
}

export default About