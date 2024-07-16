import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ifeprofileimg.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Seriki Ifeoluwa,</span> a fullstack developer in Nigeria.</h1>
        <p> I am a junior fullstack developer, and I love solving problems.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero