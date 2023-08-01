import React from 'react'
import pic from '../images/trollface.png'

export default function Header() {
  return (
    <header className='header'>
        <img src={pic} alt="" />
        <h2 className='title'>Meme Generator</h2>
        <h4 className='project'>React Course- Project 3</h4>
    </header>
  )
}
