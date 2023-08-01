import React from 'react'
import memesData from '../memesData'
import {useState} from 'react'

export default function Meme() {
    
    /*function getImage(){
        const memeArray = memesData.data.memes
        const randomNo = Math.floor(Math.random() * memeArray.length)
        console.log(randomNo)
        const url = memeArray[randomNo].url
        console.log(url)
    }*/
  
    const[memeUrl, setMemeurl] =  useState(" ")

    function getImage(){
        const memeArray = memesData.data.memes
        const randomNo = Math.floor(Math.random() * memeArray.length)
        setMemeurl(memeArray[randomNo].url)
    }
        

  return (
    <main>
        <div className='form'>
            <input className='form-input' type="text" placeholder='Top-text'/>
            <input className='form-input' type="text" placeholder='Bottom-text'/>
            <button onClick={getImage} className='form-btn'>Get a new meme image  🖼 </button>
            <img src={memeUrl} alt="" />
        </div>
    </main>
  )
}
