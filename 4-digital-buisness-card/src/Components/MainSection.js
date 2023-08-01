import React from 'react'

export default function MainSection() {
  return (
    <div className='card-mid'>
      <h1>Fatima Iqbal</h1>
      <h2>Web Developer</h2>
      <p>fatimaiqbal.website</p>

      <div className="btns">
        <a className="p-button" href=""><i className="fa-solid fa-envelope"></i>Email</a>
        <a className="p-button blue-btn" href=""><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
      </div>

      <div className='sec'>
        <h1>About</h1>  
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>

      <div className='sec'>
        <h1>Interests</h1>  
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>

    </div>
  )
}
