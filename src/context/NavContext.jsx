import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState('white')
  const [navOpen, setNavOpen] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    // normalize route (case-safe)
    const route = pathname.toLowerCase()

    if (route === '/projects' || route === '/agence') {
      setNavColor('black')
    } else {
      setNavColor('white')
    }
  }, [pathname])

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  )
}

export default NavContext
