import React from 'react'

const Project = () => {
  return (
    <div className="bg-[#02050a] pt-[6rem] md:pt-[8rem] pb-[2rem]">
        <h1 className="heading">
            Pro<span className="text-yellow-400">Ject</span>
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            
            <a href='https://aungkyawzin21.github.io/RealEstate-DesignOnly-/Home.html' target="_blank">
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <img
                            src="./images/6.png"
                            alt="portfolio"
                            className="object-contain h-[90%] mx-auto items-center"
                        />
                        <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                            RealEstate Website<br></br>
                            Language : Html, Css
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://aungkyawzin21.github.io/E-Commerce-Website/index.html' target="_blank">
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <img
                            src="./images/2.png"
                            alt="portfolio"
                            className="object-contain h-[90%] mx-auto items-center"
                        />
                        <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                            E-Commerce Website <br></br>
                            Language : Html, Css, Js
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="https://aungkyawzin21.github.io/ConstructionWebsite/index.html" target="_blank">
                <div data-aos="fade-up" data-aos-delay="900">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <img
                            src="./images/3.png"
                            alt="portfolio"
                            className="object-contain h-[90%] mx-auto items-center"
                        />
                        <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                            Construction Company Website <br></br>
                            Language : Html, Css, Js
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://aungkyawzin21.github.io/Camping-Gear-Website/index.html" target="_blank">
            <div data-aos="fade-up"  data-aos-delay="1200">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/4.png"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Camping Website <br></br>
                        Language : Html, Css, Js
                    </div>
                </div>
            </div>
            </a>
            
            <a href="#">
            <div data-aos="fade-up"  data-aos-delay="1500">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/5.png"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        My Portfolio <br></br>
                        Language : React, Tailwind Css, Next.js
                    </div>
                </div>
            </div>
            </a>
            
            <a href="https://aungkyawzin21.github.io/InnovareArchitecture/index.html" target="_blank">
            <div data-aos="fade-up"  data-aos-delay="1800">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/1.png"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Architecture Website <br></br>
                        Language : Html, Css, Js
                    </div>
                </div>
            </div>
            </a>
            
        </div>
    </div>
  )
}

export default Project