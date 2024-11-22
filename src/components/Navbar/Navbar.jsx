/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { motion } from "framer-motion"
import { FaBars } from 'react-icons/fa';

const NavbarMenu = [
  {
      id: 1,
      title: "Home",
      link: "/",
  },

  {
      id: 2,
      title: "Services",
      link: "/services",
  },
  
  {
      id: 3,
      title: "About Us",
      link: "/about",
  },

  {
      id: 4,
      title: "Our Team",
      link: "/team",
  },

  {
      id: 5,
      title: "Contacts Us",
      link: "/contact",
  },
]


const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="relative z-20">
      <motion.div 
      initial={{ opacity: 0, y: -50  }}
          animate={{ opacity: 1, y: 0  }}
          // transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      className="container py-10 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">
            The Coding Journey
          </h1>
        </div>
        {/* Menu section */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-3'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                  <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2
                  -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden">

                  </div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className='primary-btn'>Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <div>
            {
              isMenuOpen ? <IoMdMenu className='text-4xl' /> : <FaBars className='text-4xl' />
            }
          </div>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-20 left-0 w-full max-h-screen`} onClick={closeMenu}>
            <div className='text-xl font-semibold uppercase bg-primary w-full max-w-md mx-auto text-white py-10 px-6 rounded-3xl md:max-w-lg lg:max-w-xl xl:max-w-2xl '>
              <ul className="flex flex-col items-center gap-4">
                {NavbarMenu.map(({ title, link }) => (
                  <a key={link} href={link} className='text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-white hover:text-secondary w-full text-center'>
                    {title}
                  </a>
                ))}
              </ul>
            </div>
          </div>


          
        </div>
        </motion.div>
    </nav>
  )
}

export default Navbar