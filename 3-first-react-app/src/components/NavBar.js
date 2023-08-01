import React from 'react'
import ReactLogo from "../React-icon.svg.png"

export default function NavBar(){
    return (
        <div className='nav-bar'>
            <div className='nav-logo-area'>
                <img className="nav-logo" src={ReactLogo} alt="" />
                <h1 className='nav-heading'>ReactFacts</h1>
            </div>
            <h1 className='nav-course'>React Course - Project 1</h1>
        </div>
    )
}