import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Technology from './Components/Technology'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='block'>
      <  Navbar />
      <div id="Home">
      <Home />
      </div>
      <div id="Experience"><Experience /></div>
      <div id='Technology'><Technology /></div>
      <div id="About"><About /></div>
      <div id="Contacts"><Contacts /></div>
      
    </div>
      
    </>
  )
}

export default App
