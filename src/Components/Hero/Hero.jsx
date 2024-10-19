import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ifeprofileimg.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Seriki Ifeoluwa,</span> a fullstack developer in Nigeria.</h1>
        <p> I am a junior fullstack developer, and I love solving problems.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
            <a href="/SERIKI IFEOLUWA SE CV.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">My resume</a>
          </div>
        </div>
    </div>
  )
}

export default Hero