import React from 'react'
import {useState, useEffect} from 'react'

export default function Meme() {

    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg:""
    })

    const [allMemes, setAllMemes] = useState([])

   /*  useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[]) */

    useEffect(()=>{
        async function getMemes(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    })


    function getImage(){
        const randomNo = Math.floor(Math.random() * allMemes.length)
        const memeUrl = allMemes[randomNo].url

        setMeme(prevMeme=>({
            ...prevMeme,
            randomImg: memeUrl
        })
        )
    }

    function handleChange(event){
        const {name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }
    

  return (
    <main>
        <div className='form'>
            <input className='form-input' type="text" placeholder='Top-text' onChange={handleChange} name= "topText" value={meme.topText}/>
            <input className='form-input' type="text" placeholder='Bottom-text' onChange={handleChange} name= "bottomText" value={meme.bottomText}/>
            <button onClick={getImage} className='form-btn'>Get a new meme image  🖼 </button>
        </div>
        <div className="meme">
                <img src={meme.randomImg} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  )
}
