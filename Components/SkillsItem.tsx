import React from 'react'

interface Props {
    title : string;
    year : string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[1rem] md:mb-[2rem]">
        <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
            {year}
        </span>
        <h1 className="mt-[2rem] uppercase font-semibold text-[20px] sm:text-[25px] md:text-[30px] text-yellow-400">
            Programmer
        </h1>
        <h2 className="mt-[0.5rem] mb-[0.5rem] text-[15px] sm:text-[20px] md:text-[25px] text-white">
            At Myanmar DCR Co.LTD
        </h2>
        <div className="w-[100%]">
            <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80">
                From 2020/01/01, I started working at Myanmar Dcr, a branch office of DCR Company in Japan.
            </p>
            <div className="ml-5">
                <ul className="list-disc text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80">
                    <li>Developed and maintained responsive websites using ASP.Net, HTML5, CSS3, and JavaScript.</li>
                    <li>Implemented user interface enhancements and optimized performance to ensure seamless user experiences.</li>
                    <li>Collaborated with cross-functional teams to gather requirements and translate business needs into technical solutions.</li>
                    <li>Utilized frameworks such as MVC and Entity to streamline development processes and improve scalability.</li>
                    <li>Conducted thorough testing and debugging to identify and resolve issues, ensuring high-quality deliverables.</li>
                    <li>Provided technical support and guidance to team members, fostering a collaborative and productive work environment.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsItem