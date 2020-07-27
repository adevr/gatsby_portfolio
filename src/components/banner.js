import React from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbar.mobile"
import Button from "./partials/standard.button"
import illustration from "../utils/img/hello.png"
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-fullheight" id="hero">
        <NavbarMobile />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4 is-12-mobile landing-caption">
                <h1 className="subtitle">Hey there, I'm</h1>
                <h2 className="title">Alexandre</h2>
                <hr/>
                <h1 className="subtitle profession">
                  <ReactTypingEffect
                  text={['Backend Developer', 'Biker']} /></h1>
                <div className="button-wrap">
                  <Button link="#" text="Resumé"/>
                </div>
              </div>
              <div className="column is-7 is-two-thirds is-two-fifths-tablet is-11-mobile img-bg">
                <figure className="image ">
                  <img src={illustration} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </section>
    </div>
  )
}

export default Banner
