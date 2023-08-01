import React from 'react'
import CardTop from './Components/CardTop'
import CardBottom from './Components/CardBottom'
import MainSection from './Components/MainSection'
import './style.css'

export default function App() {
  return (
    <div>
        <CardTop />
        <MainSection />
        <CardBottom />
    </div>
  )
}
