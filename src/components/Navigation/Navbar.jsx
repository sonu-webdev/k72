import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [navColor] = useContext(NavbarColorContext)

  return (
    <div className="fixed top-0 left-0 w-full z-40 flex items-start justify-between">
      
      {/* Logo */}
      <div className="lg:p-5 p-3">
        <div className="lg:w-36 w-24">
          <Link to="/">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path
                fill={navColor}
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,0 L35.1441047,0 Z
                M20.0019577,0 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0 Z
                M72.5255345,0 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356
                L72.5275991,16.8932356 L72.5255345,43.9274346 L102.80937,43.9274346 Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Menu Button */}
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          if (window.innerWidth >= 1024) {
            navGreenRef.current.style.height = '100%'
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024) {
            navGreenRef.current.style.height = '0%'
          }
        }}
        className="relative bg-black cursor-pointer 
                   lg:h-16 h-12 
                   lg:w-[16vw] w-44"
      >
        {/* Hover fill */}
        <div
          ref={navGreenRef}
          className="absolute top-0 left-0 h-0 w-full bg-[#D3FD50] transition-all duration-300"
        />

        {/* Hamburger */}
        <div className="relative h-full lg:px-12 px-6 flex flex-col justify-center items-end gap-1">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
