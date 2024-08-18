import React, { useEffect } from 'react'
import "./Header2.css"
import interactive from "./main"

const Header2 = () => {
 useEffect(() => {
  (function(){
   interactive()
  })()
 }, [])
  return (
    <>
      <h1 className="subheading">Header 2</h1>
      <section id="header">
        <nav>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#skill">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <h1>Rimon Yousuf</h1>
        <div className="subtitle">
          <h3>I am</h3> <em id="animate"> web developer</em>
        </div>
      </section>
    </>
  );
}

export default Header2