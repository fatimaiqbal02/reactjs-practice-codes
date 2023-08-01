import React from 'react'
import pic from '../images/herosec.jpg'

export default function HeroSection() {
  return (
    <div className='hero-sec'>
      <img src={pic} alt="" />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
