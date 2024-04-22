import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[5rem]">
        <h1 className="heading">
            Educ<span className="text-yellow-400">ation</span>
        </h1>
        <div className="w-[80%] pt-[2rem] md:pt-[4rem] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">Degree</h1>
            <h2 className="text-[20px] md-text-[22px] lg:text-[30px] capitalize font-bold text-yellow-400">
              B.TECH (Mechanical)
            </h2>
            <h3 className="text-[18px] md-text-[18px] lg:text-[22px] capitalize mb-[1rem] md:mb-[2rem] font-bold text-white">
              At Kyaukse Technological University 
            </h3>
        </div>
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">Certificate</h1>
            <h2 className="text-[18px] md-text-[20px] lg:text-[25px] capitalize font-bold text-yellow-400">
              Java Programming
            </h2>
            <h3 className="text-[16px] md-text-[17px] lg:text-[20px] capitalize font-bold text-white">
              At KMD Institute
            </h3>
            <h2 className="text-[18px] md-text-[20px] lg:text-[25px] capitalize font-bold text-yellow-400">
              Advanced Java Programming
            </h2>
            <h3 className="text-[16px] md-text-[17px] lg:text-[20px] capitalize font-bold text-white">
              At KMD Institute
            </h3>
            <h2 className="text-[18px] md-text-[20px] lg:text-[25px] capitalize font-bold text-yellow-400">
              ASP.Net Web Application
            </h2>
            <h3 className="text-[16px] md-text-[17px] lg:text-[20px] capitalize mb-[1rem] md:mb-[2rem] font-bold text-white">
              At KMD Institute
            </h3>
        </div>
        </div>
    </div>
  )
}

export default Services