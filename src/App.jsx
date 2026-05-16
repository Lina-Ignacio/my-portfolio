import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App


