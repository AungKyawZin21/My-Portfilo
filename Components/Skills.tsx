import React from 'react'
import SkillsLanguage from './SkillsLanguage'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
    <div className="pt-[6rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
            My <span className="text-yellow-400">experience</span>
        </h1>
        <div className="w-[80%] mx-auto pt-[2rem] md:pt-[4rem] items-center">
            <div data-aos="fade-right">
                <SkillsItem title="Myanmar DCR CO.LTD" year="2020 - 2024"/>
            </div>
        </div>
    </div>
  )
}

export default Skills