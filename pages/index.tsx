import About from '@/Components/About';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Project from '@/Components/Project';
import Blogs from '@/Components/Blogs';
import Skills from '@/Components/Skills';
import React, { useEffect, useState } from 'react';
import Footer from '@/Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  useEffect(() =>{
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  },[])

  return (
  <div className="overflow-x-hidden">
    <div>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <div className="relative z-[30]">
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default HomePage;