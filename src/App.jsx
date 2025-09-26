import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Textbox from './components/Textbox.jsx'

function App() {

  const [isDark, setDark] = useState(false)

  return (
    <>
      <Navbar name='PLAYwTEXT' dark={isDark} toggleDark={setDark}/>
      <Textbox dark={isDark}/>
    </>
  )
}

export default App
