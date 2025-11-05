import { Link, useLocation } from 'react-router-dom'
import Logo from "../assets/logo1.png"
import Logo2 from '../assets/logo2.png'
import Modes from './modes.jsx'
import { useState, useEffect } from 'react'

function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 470) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    // <div className='relative'>
      <header className="theme bg-[#e3fffd] fixed top-0 w-full z-70 dark:bg-[#000]">
        <div className="flex justify-between items-center relative px-5 py-4 max-w-[1440px] mx-auto">
          {/* logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="theme w-40 sm:w-60 dark:hidden" />
            <img src={Logo2} alt="Logo" className="theme hidden w-40 sm:w-60 dark:block" />
          </div>


          {/* desktop nav (md and up) */}
          <div className='flex items-center gap-20'>
          <div className=''>
            <Modes />
          </div>
            <nav className="hidden md:block">
              <ul className="theme flex gap-8 font-medium text-[#001220] dark:text-[#fff]">
                <li><Link to="/" className={`${isActive('/') ? 'text-[#42c697]' : ''}`}>Home</Link></li>
                <li><Link to="/projects" className={`${isActive('/projects') ? 'text-[#42c697]' : ''}`}>Projects</Link></li>
                <li><Link to="/contact" className={`${isActive('/contact') ? 'text-[#42c697]' : ''}`}>Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-30 flex items-center justify-center w-10 h-10 cursor-pointer"
            >
              <span className={`theme block absolute h-[4px] w-7 rounded bg-black transform transition duration-300 dark:bg-[#fff] ${isOpen ? 'rotate-45' : '-translate-y-2'}`}/>
              <span className={`theme block absolute h-[4px] w-7 rounded bg-black transform transition duration-300 dark:bg-[#fff] ${isOpen ? 'opacity-0' : ''}`}/>
              <span className={`theme block absolute h-[4px] w-7 rounded bg-black transform transition duration-300 dark:bg-[#fff] ${isOpen ? '-rotate-45' : 'translate-y-2'}`}/>
            </button>
          </div>

          <nav className={`absolute left-0 top-full w-full md:hidden z-10 transition-all duration-400 ease-in-out 
              ${isOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-3'}`}>
            <div className="theme bg-[#e3fffd] py-8 px-5 dark:bg-[#000]">
              <ul onClick={() => setIsOpen(false)} className="flex flex-col gap-6 font-medium text-[#001220] dark:text-[#fff]">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    // </div>
  )
}

export default Header
