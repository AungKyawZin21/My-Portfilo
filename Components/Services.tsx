import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <p className="heading">
            My <span className="text-yellow-400">Services</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
            <div>
                <div className="bg-red-700 hover:scale-100 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Frontend
                    </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                        We specialize in crafting captivating user interfaces for web applications, leveraging HTML5, CSS3, and JavaScript frameworks like React and Angular for seamless, engaging experiences across devices.
                    </p>
                </div>
            </div>
            <div>
                <div className="bg-orange-700 hover:scale-100 transform transition-all duration-300 hover:rotate-3 uppercase font-semibold text-center p-[2rem]">
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Backend
                    </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                        We specialize in crafting captivating user interfaces for web applications, leveraging HTML5, CSS3, and JavaScript frameworks like React and Angular for seamless, engaging experiences across devices.
                    </p>
                </div>
            </div>
            <div>
                <div className="bg-blue-700 hover:scale-100 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Fullstack
                    </h1>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">
                        We specialize in crafting captivating user interfaces for web applications, 
                        leveraging HTML5, CSS3, and JavaScript frameworks like React and Angular for seamless, engaging experiences across devices.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services