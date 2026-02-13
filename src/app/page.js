import React from 'react'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'
import HeadNav from './components/Navbar/HeadNav'
import Info2 from './components/Info/Info2'

export default function Page() {
  return (
    <div className="">
      
      <HeadNav/>
      <div className="h-dvh bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Hero/>
      </div>
      <Info/>
      <Info2/>
      
    </div>
  )
}
