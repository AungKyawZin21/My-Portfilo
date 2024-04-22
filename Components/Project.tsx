import React from 'react'

const Project = () => {
  return (
    <div className="bg-[#02050a] pt-[6rem] md:pt-[8rem] pb-[2rem]">
        <h1 className="heading">
            Pro<span className="text-yellow-400">Ject</span>
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            <div data-aos="fade-up" data-aos-delay="300">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p1.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p2.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p3.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"  data-aos-delay="1200">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p1.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"  data-aos-delay="1500">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p2.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"  data-aos-delay="1800">
                <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <img
                        src="./images/p3.jpg"
                        alt="portfolio"
                        className="object-contain h-[90%] mx-auto items-center"
                    />
                    <div className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 text-center">
                        Language : Html, Css, React
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project