import React from 'react'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'

export default function Page() {
  return (
    <div className="">
      
      
      <div className="h-dvh bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Hero/>
      </div>
      <Info/>
      
    </div>
  )
}
