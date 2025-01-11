import React from 'react'
import { TypewriterEffectDemo } from './components/TypewriterEffectDemo'
import Dashboard from './components/Dashboard'
import HeroSection from './components/Herosection'
import HabitTracker from './components/HabitTracker'

const App = () => {
  return (
    <div>
      <>
      {/* <HeroSection/> */}
      <HabitTracker/>
      <Dashboard/>
    {/* <TypewriterEffectDemo/> */}
      </>
    </div>
  )
}

export default App
