import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';



const UseLink = styled(Link)`
  border: 2px solid #1f2c6c;
  padding: 0 10px;
`


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== `undefined`) {
        let heroHeight = document.getElementById("hero").offsetHeight
        let heroNavHeight = document.getElementById("nav-foot").offsetHeight
        const isScrolled = window.scrollY > (heroHeight - heroNavHeight)
        if (isScrolled !== scrolled) {
          setScrolled(!scrolled)
        }
      }
   }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="hero-foot" id="nav-foot" data-active={scrolled}>
      <div className="hero-foot--wrapper">
        <div className="columns">
          <div className="column is-12 hero-menu-desktop has-text-centered">
            <ul>
              <li className="is-active">
                <button onClick={() => scrollTo('#about')} >About Me</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#stack')}>Stack</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#projects')}>Projects</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')}>Contact</button>
              </li>
              <li>
                <UseLink to="/uses">Uses</UseLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
