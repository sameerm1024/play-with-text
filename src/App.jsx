import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Textbox from './components/Textbox.jsx'

function App() {
  return (
    <>
      <Navbar name='PLAYwTEXT'/>
      <Textbox/>
    </>
  )
}

export default App
