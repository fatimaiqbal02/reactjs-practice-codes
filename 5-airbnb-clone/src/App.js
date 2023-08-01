import React from 'react'
import './style.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import Card from './Components/Card'
import card1 from './images/card1.jpg'
import data from './data.js'


export default function App() {
    const cards = data.map((item)=>{
        return (
            <Card img={item.coverImg} rating={item.stats.rating} reviewCount = {item.stats.reviewCount}
                   country={item.country} title={item.title} price={item.price} 
                   openspots = {item.openSpots} key={item.id} location = {item.location}
                   /*item = {item}*/   /* {...item} */
            />
        )
    })
  return (
    <div>
        <NavBar />
        <HeroSection />
        <div className="card-section">
          {cards}
        </div>
        {/*<Card img={card1} rating={5.1} reviewCount = {6} country="USA" title="Life lessons with Katie Zaferes" price={136}/> */} 
    </div>
  )
}
