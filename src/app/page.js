import React from 'react'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Intro'
import HeadNav from './components/Navbar/HeadNav'
import Info2 from './components/Info/Why'
import Attractions from './components/Info/Attraction'
import Community from './components/Info/Community'
import Highlights from './components/Info/Highlights'

export default function Page() {
  return (
    <div className="w-dvw overflow-clip">
      
      <HeadNav/>
      <div className="lg:h-dvh w-dvw bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Hero/>
      </div>
      <Info/>
      <Info2/>
      <Attractions/>
      <Community/>
      <Highlights/>
    </div>
  )
}
